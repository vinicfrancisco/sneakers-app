import { Platform } from 'react-native'
import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { Session } from '@supabase/supabase-js'
import { IProfile } from '~/domain/user'
import supabase from '~/services/supabase'
import {
  GetProfileProps,
  SignInProps,
  SignUpProps,
  UploadAvatarProps,
} from './types'

const FOUR_HOURS_IN_SECONDS = 60 * 60 * 4

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery(),
  keepUnusedDataFor: FOUR_HOURS_IN_SECONDS,
  endpoints: (builder) => ({
    signIn: builder.mutation<Session, SignInProps>({
      async queryFn({ email, password }) {
        const { error, data } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error || !data) {
          return {
            error: {
              error: error?.message,
              originalStatus: error?.status,
              status: error?.status,
              data,
            } as FetchBaseQueryError,
          }
        }

        return {
          data: data.session,
        }
      },
    }),
    signUp: builder.mutation<Session | null, SignUpProps>({
      async queryFn({ email, fullName, username, password }) {
        const { data: signUpData, error: signUpError } =
          await supabase.auth.signUp({
            email,
            password,
          })

        if (signUpError || !signUpData) {
          return {
            error: {
              error: signUpError?.message,
              originalStatus: signUpError?.status,
              status: signUpError?.status,
              data: signUpData,
            } as FetchBaseQueryError,
          }
        }

        const { error, data } = await supabase.from('profiles').upsert({
          id: signUpData.session?.user.id,
          username,
          full_name: fullName,
        })

        if (error || !data) {
          await supabase.auth.signOut()

          return {
            error: {
              error: error?.message,
              data,
            } as FetchBaseQueryError,
          }
        }

        return {
          data: signUpData.session,
        }
      },
    }),
    getProfile: builder.query<IProfile, GetProfileProps>({
      queryFn: async ({ userId }) => {
        const { data, error, status } = await supabase
          .from('profiles')
          .select(`id, username, full_name, avatar_url`)
          .eq('id', userId)
          .single()

        if (error || !data) {
          return {
            error: {
              error: error?.message,
              originalStatus: status,
              status,
              data,
            } as FetchBaseQueryError,
          }
        }

        let avatarUrl = null

        if (data.avatar_url) {
          const { data: avatarResult } = supabase.storage
            .from('avatars')
            .getPublicUrl(`${data.avatar_url}`)

          avatarUrl = avatarResult.publicUrl
        }

        return {
          data: {
            id: data.id,
            username: data.username,
            fullName: data.full_name,
            avatarUrl,
          },
        }
      },
    }),
    uploadAvatar: builder.mutation<null, UploadAvatarProps>({
      async queryFn({ name, type, uri, userId }, { dispatch }) {
        const formData = new FormData()

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        formData.append('file', {
          uri: Platform.OS === 'ios' ? uri.replace('file://', '') : uri,
          type,
          name,
        })

        const fileExt = name.split('.').pop()
        const filePath = `avatar-${userId}-${Math.random()}.${fileExt}`

        const { error } = await supabase.storage
          .from('avatars')
          .upload(filePath, formData)

        if (error) {
          return {
            error: {
              error: error.message,
            } as FetchBaseQueryError,
          }
        }

        const { error: updateProfileError } = await supabase
          .from('profiles')
          .update({
            avatar_url: filePath,
          })
          .eq('id', userId)

        if (updateProfileError) {
          return {
            error: {
              error: updateProfileError?.message,
            } as FetchBaseQueryError,
          }
        }

        const { data: avatarResult } = supabase.storage
          .from('avatars')
          .getPublicUrl(`${filePath}`)

        dispatch(
          authApi.util.updateQueryData('getProfile', { userId }, (profile) => {
            if (profile) {
              return {
                ...profile,
                avatarUrl: avatarResult.publicUrl,
              }
            }
          }),
        )

        return {
          data: null,
        }
      },
    }),
  }),
})

export const {
  useGetProfileQuery,
  useSignInMutation,
  useSignUpMutation,
  useUploadAvatarMutation,
} = authApi

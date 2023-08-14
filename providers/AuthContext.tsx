import { createContext, useCallback, useEffect } from 'react'
import { router } from 'expo-router'
import { AuthActions } from '~/store/features/auth/slice'
import { useAppDispatch } from '~/hooks'
import supabase from '~/services/supabase'

export const AuthContext = createContext(null)

const { setSession } = AuthActions

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch()

  const handleSignOut = useCallback(() => {
    router.push('/auth')
  }, [])

  useEffect(() => {
    async function getSession() {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession()

        if (!session || !!error) {
          handleSignOut()
          return
        }

        dispatch(setSession(session))
      } catch {
        handleSignOut()
      }
    }

    getSession()
  }, [dispatch, handleSignOut])

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        dispatch(setSession(session))
      } else {
        handleSignOut()
      }
    })
  }, [dispatch, handleSignOut])

  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>
}

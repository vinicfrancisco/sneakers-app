import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Session } from '@supabase/supabase-js'
import { router } from 'expo-router'
import supabase from '~/services/supabase'

export interface AuthState {
  session: Session | null
}

const initialState: AuthState = {
  session: null,
}

const signOut = createAsyncThunk('auth/signOut', async () => {
  router.push('/auth')

  await supabase.auth.signOut()
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<Session>) => {
      state.session = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signOut.pending, (state) => {
      state.session = null
    })
  },
})

export const AuthActions = {
  ...authSlice.actions,
  signOut,
}

const AuthReducer = authSlice.reducer

export default AuthReducer

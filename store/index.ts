import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './features/auth/api'
import AuthReducer from './features/auth/slice'
import { sneakersApi } from './features/sneakers/api'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    [authApi.reducerPath]: authApi.reducer,
    [sneakersApi.reducerPath]: sneakersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(sneakersApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

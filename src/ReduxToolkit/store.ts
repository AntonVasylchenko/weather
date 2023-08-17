import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from '../ReduxToolkit/slice/weather'
import dataSlice from '../ReduxToolkit/slice/data'
export const store = configureStore({
  reducer: {
    weather:weatherSlice,
    data:dataSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
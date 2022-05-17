import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './ProductSlice'


export const store = configureStore({
  reducer: {products:ProductSlice},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
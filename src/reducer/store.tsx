import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from './LoginSlice'
import ProductSlice from './ProductSlice'


export const store = configureStore({
  reducer: {products:ProductSlice, logged:LoginSlice},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
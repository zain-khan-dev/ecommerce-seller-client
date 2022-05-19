import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface LoggedSliceSchema {
    isLogged:boolean
}


const initialState:LoggedSliceSchema = {
    isLogged: localStorage.getItem("access_token") != ""
}

export const loggedSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<boolean>) => {
        console.log("setting product", action.payload)
        state.isLogged   = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProduct } = loggedSlice.actions

export default loggedSlice.reducer
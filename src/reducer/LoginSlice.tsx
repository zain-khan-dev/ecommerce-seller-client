import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface LoggedSliceSchema {
    isLogged:boolean
}


const initialState:LoggedSliceSchema = {
    isLogged: localStorage.getItem("access_token") != "" && localStorage.getItem("access_token") != null
}

export const loggedSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoggedState: (state, action: PayloadAction<boolean>) => {
        console.log("setting product", action.payload)
        state.isLogged   = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLoggedState } = loggedSlice.actions

export default loggedSlice.reducer
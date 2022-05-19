import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {ProductSchema} from "../utils/Constants"


interface ProductSliceSchema {
    productList:ProductSchema[]
}


const initialState:ProductSliceSchema = {
    productList: []
}

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<ProductSchema[]>) => {
        console.log("setting product", action.payload)
        state.productList   = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProduct } = ProductSlice.actions

export default ProductSlice.reducer
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Products } from "../types/products.types"

const initialState: Products[] = []

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {
        id,
        attributes: { name, slug, category, image },
        quantity = 1,
      } = action.payload

      state.push({ id, attributes: { name, slug, category, image }, quantity })
    },

    removeFromCart: (state, action) => {
      const productId = action.payload
      return state.filter((product) => product.id !== productId)
    },

    incrementQty: (state, action: PayloadAction<number>) => {
      const productId = action.payload
      const findProduct = state.find((product) => product.id === productId)
      if (findProduct) findProduct.quantity += 1
    },

    decrementQty: (state, action: PayloadAction<number>) => {
      const productId = action.payload
      const findProduct = state.find((product) => product.id === productId)
      if (findProduct && findProduct.quantity > 1) findProduct.quantity -= 1
    },
  },
})

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions
export default cartSlice.reducer

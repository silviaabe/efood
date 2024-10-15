import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Menu[]
  cartIsOpen: boolean
}

const initialState: CartState = {
  items: [],
  cartIsOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Menu>) => {
      const menu = state.items.find((item) => item.id === action.payload.id)

      if (!menu) {
        state.items.push(action.payload)
      } else {
        alert('Esse prato já está no carrinho')
      }
    },
    removeCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    openCart: (state) => {
      state.cartIsOpen = true
    },
    closeCart: (state) => {
      state.cartIsOpen = false
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addCart, openCart, closeCart, removeCart, clearCart } =
  cartSlice.actions
export default cartSlice.reducer

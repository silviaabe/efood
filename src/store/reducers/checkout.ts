import { createSlice } from '@reduxjs/toolkit'

type CheckoutState = {
  checkoutIsOpen: boolean
}

const initialState: CheckoutState = {
  checkoutIsOpen: false
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    openCheckout: (state) => {
      state.checkoutIsOpen = true
    },
    closeCheckout: (state) => {
      state.checkoutIsOpen = false
    }
  }
})

export const { openCheckout, closeCheckout } = checkoutSlice.actions
export default checkoutSlice.reducer

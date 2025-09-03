import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  id: string
  name: string
  price: number
  qty: number
  thumbnail?: string
}

type CartState = {
  items: Record<string, CartItem>
}

const initialState: CartState = {
  items: {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ id: string; name: string; price: number; thumbnail?: string }>) => {
      const { id, name, price, thumbnail } = action.payload
      if (!state.items[id]) {
        state.items[id] = { id, name, price, qty: 1, thumbnail }
      }
    },
    increaseQty: (state, action: PayloadAction<string>) => {
      const id = action.payload
      if (state.items[id]) state.items[id].qty += 1
    },
    decreaseQty: (state, action: PayloadAction<string>) => {
      const id = action.payload
      if (state.items[id]) {
        state.items[id].qty -= 1
        if (state.items[id].qty <= 0) delete state.items[id]
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      delete state.items[action.payload]
    },
    clearCart: (state) => {
      state.items = {}
    },
  },
})

export const { addItem, increaseQty, decreaseQty, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer

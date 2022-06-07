import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import sort from './slices/sortSlice'
import cart from './slices/cardSlice'
import price from './slices/priceSlice'

export const store = configureStore({
    reducer: {
        filter,
        sort,
        cart,
        price
    }
})
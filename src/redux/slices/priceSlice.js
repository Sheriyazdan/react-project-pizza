import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartPrice: []
}

const priceSlice = createSlice({
    name: 'cartPrice',
    initialState,
    reducers: {
        cartPrice(state, action) {
            state.cartPrice.push(action.payload)
        }
    }
});

export const { cartPrice } = priceSlice.actions;

export default priceSlice.reducer;
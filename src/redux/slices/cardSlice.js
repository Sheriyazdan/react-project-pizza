import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartValue: {
        price: 0,
        items: 0
    }
}

const cartSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCartActive(state, action) {
            state.cartValue = action.payload;
        },
        LoadCartItems(state, action) {
            state.cartValue = action.payload
        }
    }
});

export const { setCartActive, LoadCartItems } = cartSlice.actions;

export default cartSlice.reducer;
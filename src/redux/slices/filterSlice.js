import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryActive: 0
}

const fliterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setcategoryActive(state, action) {
            console.log(action);
            state.categoryActive = action.payload;
        }
    }
});

export const { setcategoryActive } = fliterSlice.actions;

export default fliterSlice.reducer;
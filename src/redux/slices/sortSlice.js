import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sortType: { name: 'популярности(возростание)', sort: 'rating', order: 'ask' }
}

const sortSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSortType(state, action) {
            console.log(action);
            state.sortType = action.payload;
        }
    }
});

export const { setSortType } = sortSlice.actions;

export default sortSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchText: ''
}

const searchTextSlice = createSlice({
    name:'search',
    initialState,
    reducers: {
        setSearchText: (state, action) => {
            state.searchText = action.payload;
            console.log(action.payload)
        }
    }
})

export const {setSearchText} = searchTextSlice.actions;
export default searchTextSlice.reducer;
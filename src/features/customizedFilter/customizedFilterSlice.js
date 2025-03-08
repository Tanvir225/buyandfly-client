import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isNonStop: false,
    isOneStop: false
}   

const customizedFilterSlice = createSlice({
    name:'customizedFilter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.isNonStop = action.payload.isNonStop
            state.isOneStop = action.payload.isOneStop
        }
    }
})

export const {setFilter} = customizedFilterSlice.actions;
export default customizedFilterSlice.reducer;
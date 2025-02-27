import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    adult_travellers_number: 0,
    child_travellers_number: 0,
    infant_travellers_number: 0
}

const travellers_slice = createSlice({
    name: 'travellers',
    initialState,
    reducers: {
        set_adult_travellers_number: (state, action) => {
            state.adult_travellers_number = action.payload.adult;
            state.child_travellers_number = action.payload.child;
            state.infant_travellers_number = action.payload.infant;
        }
    }
})
export const {set_adult_travellers_number} = travellers_slice.actions;
export default travellers_slice.reducer;
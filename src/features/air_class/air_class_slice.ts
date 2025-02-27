import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    air_class: ''
}

const air_class_slice = createSlice({
    name:'air_class',
    initialState,
    reducers: {
        set_air_class: (state, action) => {
            state.air_class = action.payload;
        }
    }
})

export const {set_air_class} = air_class_slice.actions;
export default air_class_slice.reducer;
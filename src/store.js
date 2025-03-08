import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apis/apiSlice";
import searchTextReducer from './features/searchText/searchTextSlice'
import authReducer from './features/users/userSlice'
import air_class_reducer from './features/air_class/air_class_slice'
import travellers_reducer from './features/travellers/travellers_slice'
import filter_reducer from './features/customizedFilter/customizedFilterSlice'
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        searchText: searchTextReducer,
        authStore: authReducer,
        air_class: air_class_reducer,
        travellers: travellers_reducer,
        filters: filter_reducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
})

export default store
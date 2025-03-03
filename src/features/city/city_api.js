import { apiSlice } from "../apis/apiSlice";

const city_api = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        get_all_cities: builder.query({
            query: () => `/cities`
        })
    })
})

export const {
    useGet_all_citiesQuery
} = city_api;
export default city_api.reducer;
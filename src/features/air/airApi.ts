import { apiSlice } from "../apis/apiSlice";

export const air_api = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        get_airs: builder.mutation({
            query: (body) => ({
                url: `/airs`,
                method: 'POST',
                body
            }),
        }),
    }),
});

export const {
    useGet_airsMutation
} = air_api;

// ✅ Fix: Export the `reducerPath` and reducer
export const air_apiReducer = air_api.reducer;
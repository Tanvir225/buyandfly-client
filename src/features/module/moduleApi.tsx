import { apiSlice } from "../apis/apiSlice";

export const moduleApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        get_all_modules: builder.query({
            query: () => ({
                url: `/modules`,
                method: 'GET'
            }),
            providesTags: ['all_permission']
        }),
    }),
});

export const {
    useGet_all_modulesQuery,
} = moduleApi;

// ✅ Fix: Export the `reducerPath` and reducer
export const moduleApiReducer = moduleApi.reducer;
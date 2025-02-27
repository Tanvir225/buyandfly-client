import { apiSlice } from "../apis/apiSlice";

export const basicInfoApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBasicInfo: builder.query({
            query: () => ({
                url: `/basics`,
                method: 'GET'
            }),
        }),

        createOrUpdateBasicInfo: builder.mutation({
            query: (body) => ({
                url: `/basics`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: []
        })
    }),
});

export const {
    useCreateOrUpdateBasicInfoMutation,
    useGetBasicInfoQuery
} = basicInfoApi;

// ✅ Fix: Export the `reducerPath` and reducer
export const basicInfoApiReducer = basicInfoApi.reducer;
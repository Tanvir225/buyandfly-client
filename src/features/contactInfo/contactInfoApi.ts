import { apiSlice } from "../apis/apiSlice";

export const contactInfoApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getContactInfo: builder.query({
            query: () => ({
                url: `/contact-infos`,
                method: 'GET'
            }),
            // transformResponse: (response) => {
            //     return {
            //         contactInfo: response.data
            //     }
            // }
            // transformResponse(baseQueryReturnValue, meta, arg) {
            //     return {
            //         info: baseQueryReturnValue?.data
            //     }
            // },
        }),
        createOrUpdateContactInfo: builder.mutation({
            query: (body) => ({
                url: `/contact-infos`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: []
        })
    }),
    // overrideExisting: false, // Prevent duplicate injection,
});

export const {
    useGetContactInfoQuery,
    useCreateOrUpdateContactInfoMutation
} = contactInfoApi;

// ✅ Fix: Export the `reducerPath` and reducer
export const contactInfoApiReducer = contactInfoApi.reducer;
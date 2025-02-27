import { apiSlice } from "../apis/apiSlice";

export const socialMediaApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSocialMediaInfos: builder.query({
            query: () => ({
                url: `/social-medias`,
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
        createOrUpdateSocialMedia: builder.mutation({
            query: (body) => ({
                url: `/social-medias`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: []
        })
    }),
    // overrideExisting: false, // Prevent duplicate injection,
});

export const {
    useGetSocialMediaInfosQuery,
    useCreateOrUpdateSocialMediaMutation
} = socialMediaApi;

// ✅ Fix: Export the `reducerPath` and reducer
export const socialMediaReducer = socialMediaApi.reducer;
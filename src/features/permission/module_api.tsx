import { apiSlice } from "../apis/apiSlice";

export const module_api = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        get_all_modules: builder.query({
            query: () => ({
                url: `/modules`,
                method: 'GET'
            }),
            providesTags: ['all_permission']
        }),
        get_a_permission: builder.query({
            query: (permission_name) => ({
                url: `/permissions/${permission_name}`,
                method: 'GET'
            }),
        }),

        create_permission: builder.mutation({
            query: (body) => ({
                url: `/permissions`,
                method: 'POST',
                body
            }),
            invalidatesTags: ["all_permission"],
        }),
        update_permission: builder.mutation({
            query: (body) => ({
                url: `/permissions/${body.id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: []
        }),
        delete_permission: builder.mutation({
            query: (body) => ({
                url: `/permissions/${body.id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: []
        })
    }),
});

export const {
    useCreate_permissionMutation,
    useDelete_permissionMutation,
    useGet_all_modulesQuery,
    useGet_a_permissionQuery
} = module_api;

// ✅ Fix: Export the `reducerPath` and reducer
export const module_apiReducer = module_api.reducer;
import { apiSlice } from "../apis/apiSlice";

export const user_permission_api = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        get_all_user_permissions: builder.query({
            query: () => ({
                url: `/user-permissions`,
                method: 'GET'
            }),
        }),
        create_or_delete_user_permissions: builder.mutation({
            query: (body) => ({
                url:'/user-permissions/create-or-delete-user-permissions',
                method:'DELETE',
                body: body
            })
        }),
        create_user_permission: builder.mutation({
            query: (body) => ({
                url: `/user-permissions`,
                method: 'POST',
                body
            }),
            invalidatesTags: []
        }),
        update_user_permission: builder.mutation({
            query: (body) => ({
                url: `/user_permissions/id`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: []
        }),
        delete_user_permission: builder.mutation({
            query: (body) => ({
                url: `/user_permissions/id`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: []
        })
    }),
});

export const {
    useCreate_user_permissionMutation,
    useDelete_user_permissionMutation,
    useGet_all_user_permissionsQuery,
    useCreate_or_delete_user_permissionsMutation
} = user_permission_api;

// ✅ Fix: Export the `reducerPath` and reducer
export const user_permission_apiReducer = user_permission_api.reducer;
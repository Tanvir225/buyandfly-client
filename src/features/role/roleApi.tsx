import { apiSlice } from "../apis/apiSlice";

export const role_api = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        get_all_roles: builder.query({
            query: () => ({
                url: `/roles`,
                method: 'GET'
            }),
        }),
        get_a_role: builder.query({
            query: (role_id) => ({
                url: `/roles/${role_id}`,
                method: 'GET'
            }),
            providesTags: (result, err, args) => [{
                type:"get_role",
                role_id: args,
            }]
        }),

        create_role: builder.mutation({
            query: (body) => ({
                url: `/roles`,
                method: 'POST',
                body
            }),
            invalidatesTags: []
        }),
        update_role: builder.mutation({
            query: (body) => ({
                url: `/roles/id`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: []
        }),
        update_a_role_permission: builder.mutation({
            query: (body) => ({
                url: `/roles/permissions/${body.role_id}`,
                method: 'PATCH',
                body:{permissions:body.permissions}
            }),
            invalidatesTags: ["get_role"]
        }),
        delete_role: builder.mutation({
            query: (body) => ({
                url: `/roles/id`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: []
        })
    }),
});

export const {
useCreate_roleMutation,
useDelete_roleMutation,
useGet_all_rolesQuery,
useGet_a_roleQuery,
useUpdate_a_role_permissionMutation
} = role_api;


export const role_apiReducer = role_api.reducer;
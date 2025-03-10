import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/v1`
    }),
    endpoints: (builder) => ({}),
    tagTypes:['allUsers', 'all_admins', 'all_permission', 'get_user', 'get_role']
})
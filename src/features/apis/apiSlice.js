import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://buy-and-fly-backend.onrender.com/api/v1`
    }),
    endpoints: (builder) => ({}),
    tagTypes:['allUsers', 'all_admins', 'all_permission', 'get_user', 'get_role']
})
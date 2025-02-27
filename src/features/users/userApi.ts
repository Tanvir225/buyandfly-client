import { apiSlice } from "../apis/apiSlice";

interface User {
  status: string;
  totalRecords:number;
  data: {
    users: []
  };
  limit: number,
  totalPages: number,
}

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({
        url: `/users/register`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['allUsers']
    }),
    addUser: builder.mutation({
      query: (body) => ({
        url: `/users/add-user`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['allUsers']
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: `/auth/reset-password/${body.resetToken}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['allUsers']
    }),

    getUsers: builder.query<User, {
      searchText: string;
      currentPage: number;
    }>({
      query: ({ searchText, currentPage }) => `/users?name=${searchText}&currentPage=${currentPage}`,
      providesTags: ['allUsers']
    }),

    get_all_admin: builder.query<User, {
      searchText: string;
      currentPage: number;
    }>({
      query: ({ searchText, currentPage }) => `/admins?name=${searchText}&currentPage=${currentPage}`,
      providesTags: ['all_admins']
    }),

    getUser: builder.query({
      query: (userId) => `/users/${userId}`,
      providesTags: (result, err, args) => [
        {
          type: "get_user",
          userId: args
        }
      ] 
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: 'PATCH',
        body: user
      }),
      invalidatesTags: ['allUsers', 'all_permission', 'get_user']
    }),
    deactivateUser: builder.mutation({
      query: (id) => ({
        url: `users/deactivate/${id}`,
        method: 'PATCH'
      }),
      invalidatesTags: ['allUsers']
    })
  }),
  // overrideExisting: false, // Prevent duplicate injection,
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useDeactivateUserMutation,
  useCreateUserMutation,
  useUpdateUserMutation,
  useAddUserMutation,
  useResetPasswordMutation, 
  useGet_all_adminQuery
} = userApi;

// ✅ Fix: Export the `reducerPath` and reducer
export const userApiReducer = userApi.reducer;
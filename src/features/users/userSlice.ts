import { createSlice } from "@reduxjs/toolkit"

interface User {
    name:string;
    email:string;
    role: string;
    permissions:{};
    id:number
}
interface AuthState {
    accessToken:string | null;
    user: User| null;
}
const initialState:AuthState = {
    accessToken: null,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user
        },
        userLoggedOut: (state, action) => {
            state.accessToken = null;
            state.user = null
        }
    }
})

export const {userLoggedIn, userLoggedOut} = authSlice.actions;
export default authSlice.reducer;
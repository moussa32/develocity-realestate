import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name : 'auth',
    initialState: {user:null, email:null ,password:null, token:null},
    reducers:{
        setCredentials: (state,action) => {
            const {user, email , password ,  accessToken} = action.payload
            state.user = user
            state.email = email
            state.password = password 
            state.token = accessToken
        },
        logOut:( state,action) =>{
            state.user = null
            state.email = null
            state.password = null
            state.token = null

        }
    },
})


export const { setCredentials , logOut} = AuthSlice.actions
export default AuthSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentEmail = (state) => state.auth.email
export const selectCurrentPassword = (state) => state.auth.password
export const selectCurrentToken = (state) => state.auth.token
import { View, Text } from 'react-native'
import React from 'react'

const initialState= {
    username: '',
    email: '',
    password: '',
};

const profileReducer = (state =initialState, action) => {
    if (action.type ==='CREATE_PROFILE') {
        const data=action.payload;
        const newUsername= data.username;
        const newEmail = data.email;
        const newPassword = data.password;
    }
    return{
        ...state,
        username: newUsername,
        email: newEmail,
        password: newPassword
    };
return state;
};

export default profileReducer
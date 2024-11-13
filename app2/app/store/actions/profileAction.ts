import { View, Text } from 'react-native'
import React from 'react'

export const createProfile = (value) => {
return {
    type: "CREATE_PROFILE",
    payload: value
}
}
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../screens/LoginScreen';
// import create from "@ant-design/icons/lib/components/IconFont";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack=createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown:false,
                }} 
                />
            </Stack.Navigator>
            <Stack.Screen 
            name="Register"
            component={RegisterScreen}
            options={{
                headerTitleAlign: 'center',
                headerLeft: null
            }}
            />
            <Stack.Screen 
            name="Home"
            component={HomeScreen}
            />
        </NavigationContainer>
    )
}

export default MainNavigator;
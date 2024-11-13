import React from "react";
import 'react-native-gesture-handler'
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "../app/SocialMedia/screens/LoginScreen";
import  profileReducer  from './store/Reducers/profileReducer';
import { combineReducers } from "redux";
import RegisterScreen from "../app/SocialMedia/screens/RegisterScreen"
import MainNavigator from "../app/SocialMedia/navigator/MainNavigator";
//tewst
const rootReducer = combineReducers ({
  profileReducer : profileReducer
});
const App = () => {
  return (
    <SafeAreaProvider>
      <LoginScreen/>
    </SafeAreaProvider>
  );
};

export default App;
import { View, Text } from 'react-native'
import { Provider } from 'react-native'
import {createStore, combineReducers} from 'redux';
import React from 'react'
import {profileReducer} from './Reducers/profileReducer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from '../M4/screens/LoginScreen'
const rootReducer=combineReducers({
profileReducer:profileReducer
});

const store = createStore(rootReducer);

const App = () => {
    <Provider store={store}>
        <SafeAreaProvider>
            <LoginScreen/>
        </SafeAreaProvider>
    </Provider>
}
export default store
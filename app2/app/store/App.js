import { View, Text } from 'react-native'
import { Provider } from 'react-native'
import {createStore, combineReducers} from 'redux';
import React from 'react'
import {profileReducer} from './Reducers/profileReducer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const rootReducer=combineReducers({
profileReducer:profileReducer
});

const store = createStore(rootReducer);

const App = () => {
    <Provider store={store}>
        <SafeAreaProvider>
            <MainNavigator/>
        </SafeAreaProvider>
    </Provider>
}
export default store
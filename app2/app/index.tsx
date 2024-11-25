// import React from "react";
// import 'react-native-gesture-handler'
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import LoginScreen from "../app/SocialMedia/screens/LoginScreen";
// import  {profileReducer}  from './store/Reducers/profileReducer';
// import { combineReducers,createStore } from "redux";
// import RegisterScreen from "../app/SocialMedia/screens/RegisterScreen"
// import MainNavigator from "../app/SocialMedia/navigator/MainNavigator";
// import { Provider } from "react-redux";
// //tewst
// const rootReducer = combineReducers ({
//   profileReducer : profileReducer
// });
// const store = createStore(rootReducer)
// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <LoginScreen/>
//     </SafeAreaProvider>
//   );
// };

// export default App;

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./M4/navigator/MainNavigator";
import { profileReducer } from ".//M4/store/reducers/profileReducer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import LoginScreen from "./M4/screens/LoginScreen";
import HomeScreen from "./M4/screens/HomeScreen"
import RegisterScreen from "./M4/screens/RegisterScreen";
const rootReducer = combineReducers({
  profileReducer: profileReducer,
  // newReducer: yourReducerNameFromImport,
});


const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

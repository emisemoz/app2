import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Replace with your icon library

// Create Stack and Tab Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator for authenticated users
const TabNavigator = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={HomeScreen} // Replace with your actual HomeScreen
      options={{
        tabBarLabel: ({ focused }) => (
          <Text
            style={{
              color: focused ? 'green' : 'grey',
              fontSize: 12,
            }}
          >
            Home
          </Text>
        ),
        tabBarIcon: ({ focused }) => (
          <Icon
            name="home"
            color={focused ? 'purple' : 'grey'}
            size={24}
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'lavender',
        },
      }}
    />
  </Tab.Navigator>
);

// Main Stack Navigator
const StackNavigator = () => {
  const isLogin = useSelector((store) => store.profileReducer.isLogin);

  return (
    <Stack.Navigator>
      {isLogin ? (
        <Stack.Screen
          name="Tabs"
          component={TabNavigator} // Pass TabNavigator as component
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen} // Replace with your actual LoginScreen
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen} // Replace with your actual RegisterScreen
            options={{
              headerTitleAlign: 'center',
              headerBackVisible: false, // Hides the back button
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

// App Root Navigator
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;

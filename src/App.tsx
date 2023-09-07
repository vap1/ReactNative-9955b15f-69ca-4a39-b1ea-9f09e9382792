
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserContextProvider } from './contexts/UserContext';
import { AdminContextProvider } from './contexts/AdminContext';
import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import { UserRegistrationRequest, UserRegistrationResponse } from './types/Types';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    console.log('App started');
  }, []);

  const handleUserRegistration = (request: UserRegistrationRequest) => {
    console.log('User registration request:', request);
    // Make API call to register user
    // ...
    const response: UserRegistrationResponse = {
      success: true,
      message: 'User registered successfully',
    };
    console.log('User registration response:', response);
  };

  return (
    <NavigationContainer>
      <UserContextProvider>
        <AdminContextProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Auth"
              component={AuthNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App"
              component={AppNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </AdminContextProvider>
      </UserContextProvider>
    </NavigationContainer>
  );
};

export default App;
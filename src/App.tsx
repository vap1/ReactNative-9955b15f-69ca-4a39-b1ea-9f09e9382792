
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserContextProvider } from './contexts/UserContext';
import { AdminContextProvider } from './contexts/AdminContext';
import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    console.log('App started');
  }, []);

  return (
    <NavigationContainer>
      <UserContextProvider>
        <AdminContextProvider>
          <Stack.Navigator>
            {/* <Stack.Screen
              name="Auth"
              component={AuthNavigator}
              options={{ headerShown: false }}
            /> */}
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
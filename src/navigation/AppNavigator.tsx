
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from '../screens/LoginScreen';
import { RegistrationScreen } from '../screens/RegistrationScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { AdminUserDetailsScreen } from '../screens/AdminUserDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  console.log('Initializing AppNavigator');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ title: 'Registration' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
        <Stack.Screen
          name="AdminUserDetails"
          component={AdminUserDetailsScreen}
          options={{ title: 'Admin User Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
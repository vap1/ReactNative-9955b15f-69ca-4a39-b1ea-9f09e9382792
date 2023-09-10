
import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { UserLoginRequest } from '../types/Types';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isAdmin, loginUser } = useContext(UserContext);

  const handleLogin = async () => {
    console.log('Step 1: Logging in...');
    console.log('Email:', email);
    console.log('Password:', password);

    if (loginUser === undefined) {
      console.error('loginUser is undefined');
      throw new Error('loginUser is undefined');
    }
    console.log('Logging in user...');
    const userLoginRequest: UserLoginRequest = {
      email: email,
      password: password
    };
    await loginUser(userLoginRequest);
    
    // Perform login API call here
    // Example API call using fetch:
    // fetch('/api/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Step 2: Login response:', data);
    //     // Handle login response here
    //   })
    //   .catch((error) => {
    //     console.error('Login error:', error);
    //     // Handle login error here
    //   });
    
    if (isAdmin === undefined) {
      console.error('isAdmin is undefined');
      throw new Error('isAdmin is undefined');
    }
    console.log('Redirecting to Profile(s) Screen');
    if (isAdmin) {
      console.log('Redirecting to Profile Screen');
      navigation.navigate('Profile');
    } else {
      console.log('Redirecting to AdminUserDetailsScreen Screen');
      navigation.navigate('AdminUserDetailsScreen');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
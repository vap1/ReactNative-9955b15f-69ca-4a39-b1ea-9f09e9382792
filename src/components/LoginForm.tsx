
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login button pressed');
    console.log('Email:', email);
    console.log('Password:', password);

    // Perform login API call here

    // Example console log for API response
    console.log('API response:', { success: true, message: 'Login successful' });
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

export default LoginForm;
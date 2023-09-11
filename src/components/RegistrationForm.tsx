
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    console.log('Step 2: User submits the registration form');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Perform registration logic here

    console.log('Registration successful');
    console.log('Redirecting to Login Screen');
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
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
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

export default RegistrationForm;
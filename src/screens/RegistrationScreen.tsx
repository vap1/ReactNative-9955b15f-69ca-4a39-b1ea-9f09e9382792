
import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { UserRegistrationRequest } from '../types/Types';

const RegistrationScreen = ({navigation}: {navigation: any}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { registerUser } = useContext(UserContext);

  const handleRegistration = async () => {
    console.log('Step 2: User submits the registration form');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Perform registration logic here
    if (registerUser === undefined) {
      throw new Error('Undefined registerUser');
    }
    const userRegistrationRequest: UserRegistrationRequest = {
      name: name,
      email: email,
      password: password
    };
    await registerUser(userRegistrationRequest);
    console.log('Registration successful');

    console.log('Redirecting to Login Screen');
    navigation.navigate('Login');
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

export default RegistrationScreen;
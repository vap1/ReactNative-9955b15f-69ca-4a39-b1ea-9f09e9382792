
import React, { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { UserProfileUpdateRequest } from '../types/Types';

const ProfileForm: React.FC = () => {
  const { user, updateUserProfile } = useContext(UserContext);
  const [name, setName] = useState<string>(user?.name || '');
  const [contactInfo, setContactInfo] = useState<string>(user?.contactInfo || '');
  const [address, setAddress] = useState<string>(user?.address || '');

  const handleSave = async () => {
    console.log('Saving profile...');
    const request: UserProfileUpdateRequest = {
      token: user?.token || '',
      name,
      contactInfo,
      address,
    };

    try {
      const response = await updateUserProfile(request);
      if (response.success) {
        console.log('Profile saved successfully!');
        updateUserProfile(response.user);
      } else {
        console.log('Failed to save profile:', response.message);
      }
    } catch (error) {
      console.log('Error saving profile:', error.message);
    }
  };

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        value={contactInfo}
        onChangeText={setContactInfo}
        placeholder="Contact Info"
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default ProfileForm;
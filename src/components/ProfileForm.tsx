
import React, { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { UserProfileUpdateRequest, UserProfileUpdateResponse } from '../types/Types';

const ProfileForm: React.FC = () => {
  const { user, token, updateUserProfile } = useContext(UserContext);
  const [name, setName] = useState<string>(user?.name || '');
  const [contactInfo, setContactInfo] = useState<string>(user?.contactInfo || '');
  const [address, setAddress] = useState<string>(user?.address || '');

  const handleSave = async () => {
    console.log('Saving profile...');
    const request: UserProfileUpdateRequest = {
      token: token || '',
      name,
      contactInfo,
      address,
    };

    try {
      console.log('Sending update profile request:', request);
      let response: UserProfileUpdateResponse;
      if (updateUserProfile) {
        response = await updateUserProfile(request);
      } else {
        throw new Error("updateUserProfile is null");
      }
      console.log('Update profile response:', response);
      if (response.success) {
        console.log('Profile saved successfully!');
      } else {
        console.log('Failed to save profile:', response.message);
      }
    } catch (error) {
      console.log('Error saving profile:', error);
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
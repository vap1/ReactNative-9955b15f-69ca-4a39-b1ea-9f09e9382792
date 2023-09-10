
import React, { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { UserProfileRequest, UserProfileResponse } from '../types/Types';

const ProfileScreen = ({navigation}: {navigation: any}) => {
  const { user, token, getUserProfile } = useContext(UserContext);

  useEffect(() => {
    console.log('Step 1: User logs in to their account');

    const userProfileRequest: UserProfileRequest = {
      token: token!,
    };

    console.log('Step 2: User retrieves their profile information');

    if (getUserProfile === undefined) {
      console.error("getUserProfile is undefined");
      return;
    }

    getUserProfile(userProfileRequest)
      .then((response: UserProfileResponse) => {
        console.log('Step 3: User receives the profile information');
        console.log('Profile:', response.user);
      })
      .catch((error: Error) => {
        console.log('Error:', error.message);
      });
  }, []);

  return (
    <View>
      <Text>Profile Screen</Text>
      <Text>Name: {user?.name}</Text>
      <Text>Email: {user?.email}</Text>
      <Text>Contact Info: {user?.contactInfo}</Text>
      <Text>Address: {user?.address}</Text>
      <Text>Profile Picture: {user?.profilePicture}</Text>
    </View>
  );
};

export default ProfileScreen;
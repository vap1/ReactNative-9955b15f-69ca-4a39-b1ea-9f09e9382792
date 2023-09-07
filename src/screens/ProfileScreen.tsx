
import React, { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { UserProfileRequest, UserProfileResponse } from '../types/Types';

const ProfileScreen: React.FC = () => {
  const { getUserProfile } = useContext(UserContext);

  useEffect(() => {
    console.log('Step 1: User logs in to their account');

    // Assuming you have a way to get the user's token after login
    const token = 'user_token';

    const userProfileRequest: UserProfileRequest = {
      token: token,
    };

    console.log('Step 2: User retrieves their profile information');

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
    </View>
  );
};

export default ProfileScreen;
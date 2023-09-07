
import React, { createContext, useState } from 'react';
import { UserRegistrationRequest, UserRegistrationResponse, UserLoginRequest, UserLoginResponse, UserProfileRequest, UserProfileResponse, UserProfileUpdateRequest, UserProfileUpdateResponse } from '../types/Types';
import { registerUser, loginUser, getUserProfile } from '../apis/UserApi';

interface UserContextProps {
  user: UserProfileResponse | null;
  registerUser: (request: UserRegistrationRequest) => Promise<UserRegistrationResponse>;
  loginUser: (request: UserLoginRequest) => Promise<UserLoginResponse>;
  getUserProfile: (request: UserProfileRequest) => Promise<UserProfileResponse>;
  updateUserProfile: (request: UserProfileUpdateRequest) => Promise<UserProfileUpdateResponse>;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  registerUser: async () => ({ success: false, message: '' }),
  loginUser: async () => ({ success: false, message: '', token: '' }),
  getUserProfile: async () => ({ user: { name: '', email: '', contactInfo: '', address: '', profilePicture: '' } }),
  updateUserProfile: function (request: UserProfileUpdateRequest): Promise<UserProfileUpdateResponse> {
    throw new Error('Function not implemented.');
  }
});

export const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProfileResponse | null>(null);

  const handleRegisterUser = async (request: UserRegistrationRequest) => {
    console.log('Registering user:', request);
    try {
      const response = await registerUser(request);
      console.log('Registration response:', response);
      return response;
    } catch (error) {
      console.error('Error occurred during user registration:', error);
      throw error;
    }
  };

  const handleLoginUser = async (request: UserLoginRequest) => {
    console.log('Logging in user:', request);
    try {
      const response = await loginUser(request);
      console.log('Login response:', response);
      if (response.success) {
        console.log('Setting user:', response.user);
        setUser(response.user);
      }
      return response;
    } catch (error) {
      console.error('Error occurred while logging in:', error);
      throw error;
    }
  };

  const handleGetUserProfile = async (request: UserProfileRequest) => {
    console.log('Getting user profile:', request);
    try {
      const response = await getUserProfile(request);
      console.log('User profile response:', response);
      if (response.user) {
        console.log('Setting user:', response.user);
        setUser(response.user);
      }
      return response;
    } catch (error) {
      console.error('Failed to retrieve user profile:', error);
      throw error;
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        registerUser: handleRegisterUser,
        loginUser: handleLoginUser,
        getUserProfile: handleGetUserProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
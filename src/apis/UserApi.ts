
import axios from 'axios';
import { UserRegistrationRequest, UserRegistrationResponse, UserLoginRequest, UserLoginResponse, UserProfileRequest, UserProfileResponse } from '../types/Types';

export const registerUser = async (request: UserRegistrationRequest): Promise<UserRegistrationResponse> => {
  try {
    console.log('Sending user registration request:', request);

    // Simulating API call and generating random data
    const response: UserRegistrationResponse = {
      success: true,
      message: 'User registration successful',
    };

    console.log('Received user registration response:', response);
    return response;
  } catch (error) {
    console.error('Error occurred during user registration:', error);
    throw error;
  }
};

export const loginUser = async (request: UserLoginRequest): Promise<UserLoginResponse> => {
  try {
    console.log('Sending login request to the server...');
    console.log('Request:', request);

    var loginRequestConfig = {
      method: 'get',
      url: 'http://localhost:3000/login',
      headers: { }
    };
    
    var userLoginResponse: UserLoginResponse; 
    try {
      const response = await axios(loginRequestConfig);
      console.log(JSON.stringify(response.data));
      userLoginResponse = response.data;
    } catch(error: unknown) {
      console.log(error);
      throw error;
    };

    console.log('Received login response from the server...');
    console.log('UserLoginResponse:', userLoginResponse);
    return userLoginResponse;
  } catch (error) {
    console.error('Error occurred while logging in:', error);
    throw error;
  }
};

export const getUserProfile = async (request: UserProfileRequest): Promise<UserProfileResponse> => {
  try {
    console.log('Sending GET request to retrieve user profile...');
    console.log('Request:', request);

    // Simulating API call and generating random data
    const userProfile = generateRandomUserProfile();

    console.log('User profile retrieved successfully:', userProfile);
    return { user: userProfile, success:true };
  } catch (error) {
    console.error('Failed to retrieve user profile:', error);
    throw error;
  }
};

// Helper function to generate random user profile data
const generateRandomUserProfile = (): UserProfileResponse['user'] => {
  // Generate random user profile data here
  return {
    name: 'John Doe',
    email: 'johndoe@example.com',
    contactInfo: '123-456-7890',
    address: '123 Main St',
    profilePicture: 'https://example.com/profile.jpg',
  };
};

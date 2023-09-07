
import { UserRegistrationRequest, UserRegistrationResponse, UserLoginRequest, UserLoginResponse } from '../types/Types';

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

    // Simulating API call and generating random data
    const response: UserLoginResponse = {
      success: true,
      message: 'Login successful',
      token: 'random_token',
    };

    console.log('Received login response from the server...');
    console.log('Response:', response);

    return response;
  } catch (error) {
    console.error('Error occurred while logging in:', error);
    throw error;
  }
};
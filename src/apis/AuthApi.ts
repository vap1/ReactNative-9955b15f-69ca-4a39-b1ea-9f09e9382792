
import { UserLoginRequest, UserLoginResponse } from '../types/Types';

export const loginUser = async (request: UserLoginRequest): Promise<UserLoginResponse> => {
  try {
    console.log('Step 1: Sending login request to the server...');
    console.log('Request:', request);

    // Simulating API call and generating random data
    const response: UserLoginResponse = {
      success: true,
      message: 'Login successful',
      token: 'random_token'
    };

    console.log('Step 2: Received login response from the server...');
    console.log('Response:', response);

    return response;
  } catch (error) {
    console.error('Error occurred while logging in:', error);
    throw error;
  }
};
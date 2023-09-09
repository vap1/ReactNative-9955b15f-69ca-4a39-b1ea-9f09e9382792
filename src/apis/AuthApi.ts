
import { User, UserLoginRequest, UserLoginResponse } from '../types/Types';

export const loginUser = async (request: UserLoginRequest): Promise<UserLoginResponse> => {
  try {
    console.log('Step 1: Sending login request to the server...');
    console.log('Request:', request);

    // Simulating API call and generating random data
    const response: UserLoginResponse = {
      user: generateRandomUser(),
      success: true,
      message: 'Login successful',
      token: 'random_token',
    };

    console.log('Step 2: Received login response from the server...');
    console.log('Response:', response);

    return response;
  } catch (error) {
    console.error('Error occurred while logging in:', error);
    throw error;
  }
};

const generateRandomUser = (): User => {
  // Generate random user profile data here
  return {
    name: 'John Doe',
    email: 'johndoe@example.com',
    contactInfo: '123-456-7890',
    address: '123 Main St',
    profilePicture: 'https://example.com/profile.jpg',
  };
};
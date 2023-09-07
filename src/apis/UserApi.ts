
import { UserRegistrationRequest, UserRegistrationResponse } from '../types/Types';

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
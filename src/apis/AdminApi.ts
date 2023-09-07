
import { AdminUserDetailsRequest, AdminUserDetailsResponse } from '../types/Types';

export const getAdminUserDetails = async (request: AdminUserDetailsRequest): Promise<AdminUserDetailsResponse> => {
  try {
    console.log('Calling getAdminUserDetails API');
    // Simulating API call and generating random data
    const users = generateRandomUsers();

    console.log('getAdminUserDetails API response:', users);
    return { users, success: true };
  } catch (error) {
    console.error('Error in getAdminUserDetails API:', error);
    return { users: [], success: false, message: 'Failed to retrieve user details' };
  }
};

// Helper function to generate random user data
const generateRandomUsers = (): User[] => {
  // Generate random user data here
  return [
    { name: 'John Doe', email: 'johndoe@example.com', contactInfo: '1234567890', address: '123 Main St', profilePicture: 'https://example.com/profile.jpg' },
    { name: 'Jane Smith', email: 'janesmith@example.com', contactInfo: '9876543210', address: '456 Elm St', profilePicture: 'https://example.com/profile.jpg' },
    // Add more random users here
  ];
};

import React, { createContext, useState, useEffect } from 'react';
import { AdminUserDetailsRequest, AdminUserDetailsResponse, User } from '../types/Types';
import { getAdminUserDetails } from '../apis/AdminApi';

interface AdminContextProps  extends React.PropsWithChildren {
  users?: User[];
  loading?: boolean;
  error?: string | null;
  fetchAdminUserDetails?: () => Promise<AdminUserDetailsResponse>;
}

export const AdminContext = createContext<AdminContextProps>({
  users: [],
  loading: false,
  error: null,
  fetchAdminUserDetails: async () => {
    throw new Error('Function not implemented.');
  }
});

export const AdminContextProvider: React.FC<AdminContextProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAdminUserDetails = async () => {
    setLoading(true);
    setError(null);

    console.log('Fetching admin user details...');

    const request: AdminUserDetailsRequest = {
      token: 'YOUR_ADMIN_TOKEN',
    };

    try {
      const response = await getAdminUserDetails(request);
      console.log('Admin user details fetched successfully:', response);
      setUsers(response.users);
      setLoading(false);
      return response;
    } catch (error) {
      console.error('Failed to fetch admin user details:', error);
      setError('Failed to fetch admin user details');
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    fetchAdminUserDetails();
  }, []);

  return (
    <AdminContext.Provider value={{ users, loading, error, fetchAdminUserDetails }}>
      {children}
    </AdminContext.Provider>
  );
};

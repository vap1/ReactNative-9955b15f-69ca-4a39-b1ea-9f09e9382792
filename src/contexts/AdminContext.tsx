
import React, { createContext, useState, useEffect } from 'react';
import { AdminUserDetailsRequest, AdminUserDetailsResponse, User } from '../types/Types';
import { getAdminUserDetails } from '../apis/AdminApi';

interface AdminContextProps {
  users: User[];
  loading: boolean;
  error: string | null;
  fetchAdminUserDetails: () => void;
}

export const AdminContext = createContext<AdminContextProps>({
  users: [],
  loading: false,
  error: null,
  fetchAdminUserDetails: () => {},
});

export const AdminContextProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAdminUserDetails = () => {
    setLoading(true);
    setError(null);

    console.log('Fetching admin user details...');

    const request: AdminUserDetailsRequest = {
      token: 'YOUR_ADMIN_TOKEN',
    };

    getAdminUserDetails(request)
      .then((response: AdminUserDetailsResponse) => {
        console.log('Admin user details fetched successfully:', response);
        setUsers(response.users);
        setLoading(false);
      })
      .catch((error: Error) => {
        console.error('Failed to fetch admin user details:', error.message);
        setError('Failed to fetch admin user details');
        setLoading(false);
      });
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
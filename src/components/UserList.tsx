
import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { AdminContext } from '../contexts/AdminContext';
import { User } from '../types/Types';

const UserList: React.FC = () => {
  const { users, fetchAdminUserDetails } = useContext(AdminContext);

  useEffect(() => {
    console.log('Fetching user details...');
    if (fetchAdminUserDetails === undefined) {
      console.error("fetchAdminUserDetails is undefined");
      return;
    }
    fetchAdminUserDetails()
      .then(() => console.log('User details fetched successfully'))
      .catch((error) => console.log('Error fetching user details:', error));
  }, []);

  console.log('User List:', users);

  return (
    <View>
      <Text>User List:</Text>
      {users?.map((user: User) => (
        <View key={user.email}>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Contact Info: {user.contactInfo}</Text>
          <Text>Address: {user.address}</Text>
          <Text>Profile Picture: {user.profilePicture}</Text>
        </View>
      ))}
    </View>
  );
};

export default UserList;
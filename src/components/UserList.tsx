
import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { AdminContext } from '../contexts/AdminContext';
import { User } from '../types/Types';

const UserList: React.FC = () => {
  const { users, getUsers } = useContext(UserContext);
  const { isAdmin } = useContext(AdminContext);

  useEffect(() => {
    console.log('Fetching user details...');
    getUsers()
      .then(() => console.log('User details fetched successfully'))
      .catch((error) => console.log('Error fetching user details:', error));
  }, []);

  return (
    <View>
      <Text>User List:</Text>
      {users.map((user: User) => (
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
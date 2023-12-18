import {View, Text, Button} from 'react-native';
import React from 'react';

import {userStore} from '../store/userStore';

const UserScreen = ({navigation}) => {
  const {authLogout} = userStore();
  return (
    <View>
      <Text>UserScreen</Text>
      <Button title="Đăng xuất" onPress={() => authLogout(navigation)}></Button>
    </View>
  );
};

export default UserScreen;

import React from 'react';
import {Button, Text, View} from 'react-native';
import {userStore} from '../store/userStore';

const HomeScreen = ({navigation}) => {
  const {authLogout} = userStore();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Đăng xuất" onPress={() => authLogout(navigation)}></Button>
    </View>
  );
};

export default HomeScreen;

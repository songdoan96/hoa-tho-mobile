import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import splash from '../assets/splash.png';

const SplashScreen = ({navigation}) => {
  console.log('SplashScreen');
  useEffect(() => {
    async function getUser() {
      console.log(await AsyncStorage.getAllKeys());
      // await AsyncStorage.removeItem('@ht:user');
      // await AsyncStorage.removeItem('@ht:token');
      const data = await AsyncStorage.getItem('@ht:user');
      if (data !== null) {
        return navigation.navigate('Home');
      } else {
        return navigation.navigate('Login');
      }
    }
    getUser();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Image
        style={{flex: 1, width: '100%', height: '100%'}}
        source={splash}
        resizeMode="cover"
      />
    </View>
  );
};

export default SplashScreen;

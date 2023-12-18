import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Image source={require('../assets/home.png')} />
      <Text style={{backgroundColor: 'orange', marginBottom: 1000}}>
        HomeScreen
      </Text>
      <Text style={{backgroundColor: 'red'}}>HomeScreen</Text>
    </ScrollView>
  );
};

export default HomeScreen;

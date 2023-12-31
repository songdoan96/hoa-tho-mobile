import {View, Text, Image} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={require('../assets/loading-icon.gif')} />
    </View>
  );
};

export default Loading;

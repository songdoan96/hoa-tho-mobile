import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashScreen';
import {useEffect, useState} from 'react';

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   async function getUser() {
  //     const user = await AsyncStorage.getItem('@ht:user');
  //     if (user !== null) {
  //       setUser(user);
  //       console.log(user);
  //     }
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   }
  //   getUser();
  // }, []);
  // if (loading) {
  //   return <SplashScreen />;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={SplashScreen}
        />

        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{headerShown: false}}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

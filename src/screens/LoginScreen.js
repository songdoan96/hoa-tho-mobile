import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {userStore} from '../store/userStore';

const LoginScreen = ({navigation}) => {
  const {user, error, authLogin} = userStore();
  // if (user) {
  //   return navigation.navigate('Home');
  // }

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState(error);
  function handleLogin() {
    if (!username || !password) {
      return setErrors('Mã nhân viên, mật khẩu không được để trống');
    }
    authLogin(username, password, navigation);
    if (error) {
      setErrors(error);
    }
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
      }}>
      <View>
        <Text style={styles.title}>Đăng nhập</Text>
        {errors && <Text style={{color: '#f00'}}>{errors}</Text>}
        <TextInput
          value={username}
          onChangeText={text => setUsername(text)}
          style={{
            color: 'gray',
            marginVertical: 10,
            borderWidth: 1,
            padding: 10,
          }}
          placeholder="Mã số nhân viên"
        />
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          style={{
            color: 'gray',
            marginVertical: 10,
            borderWidth: 1,
            padding: 10,
          }}
          secureTextEntry
          placeholder="Mật khẩu"
        />
        <Pressable style={styles.btn} onPress={handleLogin}>
          <Text style={{textTransform: 'uppercase'}}>Đăng nhập</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  title: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#11CDEF',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});

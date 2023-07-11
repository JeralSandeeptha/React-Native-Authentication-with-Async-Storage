import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../providers/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const { setUserDetails, setUserId } = useContext(AuthContext);

    const handleLogin = async () => {
        await axios.post('http://192.168.1.138:6000/api/auth/login', {
          email: email,
          password: password
        })
        .then( async (res) => {
          console.log(res.data.user);
          setUserDetails(res.data.user);

          if(res.status == 200){
            try {
              await AsyncStorage.setItem('token', res.data.user.token);
              await AsyncStorage.setItem('userId', res.data.user._id);
              setUserId(res.data.user._id);
            } catch (e) {
              console.log(e);
            }
            alert("Login Success");
            navigation.replace("Home");
          }
        })
        .catch( (error) => {
          console.log(error);
          alert("Wrong credentials. Please try again.");
        });
    }

    return (
       <View>
        <Text>Email</Text>
        <TextInput onChangeText={ (text) => {
            console.log(text);
            setemail(text);
        } }/>

        <Text>Password</Text>
        <TextInput onChangeText={ (text) => {
            console.log(text);
            setpassword(text);
        } }/>

        <TouchableOpacity
            onPress={handleLogin}
        >
            <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={ () => {
            navigation.navigate('Register')
            }}
        >
            <Text>Create a new account</Text>
        </TouchableOpacity>
       </View>
    );

}

export default Login

const styles = StyleSheet.create({})
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Home = ({navigation}) => {
  
  const { userDetails, userId, setUserDetails } = useContext(AuthContext);

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userId');
      navigation.replace("Login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    removeToken();
    console.log("Logged out");
  }

  const setData = () => {
    axios.get(`http://192.168.1.138:6000/api/auth/${userId}`)
      .then( (res) => {
        console.log(res.data.data);
        setUserDetails(res.data.data);
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  useEffect( () => {
    setData();
  }, []);

  return (
    <View>
      {
        userDetails.picture ? (
          <Image
            source={{ uri: userDetails.picture }} 
            style={{width: 50, height: 50, resizeMode: 'contain', borderRadius: 100}}
          />
        ) : null
      }
      <Text>Welcome {userDetails.fname}</Text>
      <TouchableOpacity>
        <Text onPress={handleLogout}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text onPress={ () => navigation.navigate("Profile")}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
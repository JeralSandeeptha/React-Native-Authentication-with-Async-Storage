import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import AuthProvider, { AuthContext } from '../providers/AuthProvider'

const Profile = ({navigation}) => {

  const { userDetails } = useContext(AuthContext);

  return (
    <View>
      <Image
        source={{ uri: userDetails.picture }} 
        style={{width: 200, height: 200, resizeMode: 'contain', borderRadius: 100}}
      />
      <Text>{userDetails.fname}</Text>
      <Text>{userDetails.lname}</Text>
      <Text>{userDetails.email}</Text>
      <Text>{userDetails.password}</Text>
      <Text>{userDetails.mobile}</Text>
      <Text>{userDetails.token}</Text>
    </View>
  );

}

export default Profile

const styles = StyleSheet.create({});
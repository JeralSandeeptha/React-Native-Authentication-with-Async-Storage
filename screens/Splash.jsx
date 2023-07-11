import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Splash = ({navigation}) => {

  const [isGo, setIsGo] = useState(false);

  useEffect( () => {
    setTimeout(() => {
      setIsGo(true);
    }, 3000);
    if(isGo) {
      navigation.replace("Login");
    }
  });

  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})
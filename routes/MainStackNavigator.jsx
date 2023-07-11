import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../providers/AuthProvider';

const Stack = createStackNavigator();

const MainStackNavigator = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const { setUserId } = useContext(AuthContext);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');
      setUserId(userId);
      if (token) {
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect( () => {
    getToken();
  });

  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center'
          }}
        >
          {
            isLoggedIn == null ? (
                <Stack.Screen name="Splash" component={Splash} />
            ) : isLoggedIn == true ? (
              <>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Register" component={Register} />
              </>
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home} />
              </>
            )
          }
          
          
          
        </Stack.Navigator>
    </NavigationContainer>
  )

}

export default MainStackNavigator;
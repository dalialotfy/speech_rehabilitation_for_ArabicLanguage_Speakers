import React, { Component } from 'react';
import { Text, View,StyleSheet,Button } from "react-native";

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Speech from './Components/Speech';
import Assistant from './Components/Assistant';
import Coach from './Components/Coach';
const Stack = createStackNavigator();
export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Speech Rehabilitation App"
            component={Home}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
                    <Stack.Screen
            name="Register"
            component={Register}
          />
            <Stack.Screen
            name="Speech"
            component={Speech}
          />
          <Stack.Screen
            name="Assistant"
            component={Assistant}
          />
        <Stack.Screen
            name="Coach"
            component={Coach}
          />
        </Stack.Navigator>
      </NavigationContainer>

  )
}




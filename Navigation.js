import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../myapp/Screens/HomeScreen'
import NewPostScreen from '../myapp/Screens/NewPostScreen'
import LoginScreen from './Screens/LoginScreen'
import SignUpScreen from './Screens/SignUpScreen'


const Stack = createNativeStackNavigator();
const ScreenOptions = {
    headerShown : false
}

export const  SignedInStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen' screenOptions={ScreenOptions} >
            <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='NewPostScreen' component={NewPostScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export const  SignedOutStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen' screenOptions={ScreenOptions} >
            <Stack.Screen name='LoginScreen' component={LoginScreen}></Stack.Screen>
            <Stack.Screen name='SignUpScreen' component={SignUpScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}


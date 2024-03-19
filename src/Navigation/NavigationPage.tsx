import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../../Component/Splash";
import LoginScreen from '../Screens/Auth/Login/LoginScreen';
import SignUpScreen from '../Screens/Auth/SignUp/SignUpScreen';


const NavigationPage = () => {
    const [isSplashscreen, setisSplashscreen] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setisSplashscreen(false)
        }, 3000);
        return () => clearTimeout(timer)
    }, [])

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            {
                isSplashscreen && (
                    <Stack.Screen name='SplashScreen' component={SplashScreen} />
                )
            }
            < Stack.Screen name='LoginScreen' component={LoginScreen} />
            < Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        </Stack.Navigator>
    )
}

export default NavigationPage
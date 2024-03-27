import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CartScreen, DetailScreen, FavoriteScreen, HomeScreen, } from '../Screens/main';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }} >
      <Tab.Screen name='HomeScreen' component={HomeScreen} />
      <Tab.Screen name='CartScreen' component={CartScreen} />
      <Tab.Screen name='FavoriteScreen' component={FavoriteScreen} />
      <Tab.Screen name='DetailScreen' component={DetailScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;


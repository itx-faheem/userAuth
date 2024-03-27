import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CartScreen, DetailScreen, FavoriteScreen, HomeScreen, } from '../Screens/main';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../../constant';
import { BlurView } from '@react-native-community/blur';
import CustomIcon from '../../Component/CustomIcon';
import HomeIcon from "react-native-vector-icons/Entypo";
import BagIcon from "react-native-vector-icons/Ionicons";
import BellIcon from "react-native-vector-icons/FontAwesome";
const Tab = createBottomTabNavigator()
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBarStyle,
      tabBarBackground: () => (
        <BlurView
          overlayColor=""
          blurAmount={15}
          style={styles.BlurViewStyles}
        />
      )
    }} >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <HomeIcon
              name='home'
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          )
        }}
        name='HomeScreen' component={HomeScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <BagIcon
              name='bag'
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          )
        }}
        name='CartScreen' component={CartScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <BagIcon
              name='heart-sharp'
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          )
        }} name='FavoriteScreen' component={FavoriteScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <BellIcon
              name='bell'
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          )
        }} name='DetailScreen' component={DetailScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: "absolute",
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent"
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
})
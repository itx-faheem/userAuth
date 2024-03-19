import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { COLORS, SIZES, images } from '../../../../constant';
import Input from '../../../../Component/Input';
import LoginInputs from './LoginInputs';
import AppButton from '../../../../Component/AppButton';
import LoginIconSection from './LoginIconSection';
import notifee, {AndroidImportance} from '@notifee/react-native'

const LoginScreen = ({ navigation }: any) => {

  useEffect(() => {
  }, []);

  const displayNotification = async () => {
    await notifee.requestPermission()
    const channelId = await notifee.createChannel({
      id:'Chat Notification',
      name:'Chat Channel',
      importance:AndroidImportance.HIGH
    })
await notifee.displayNotification({
  title:'Chat Title',
  body: "this is Chat notitification",
  android:{
    channelId,
  }
})

    

  };


  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps='handled'
    >
      <View style={styles.container}>
        <View style={{ marginVertical: 25, gap: 5 }} >
          <Image source={images.Group} style={styles.imgStyle} />
          <Text style={styles.singText} >Sing in your account</Text>
        </View>
        <View>
          <LoginInputs />
        </View>
        <AppButton
          onPress={displayNotification}
          disabled={false}
          title='Sign In' />
        <View>
          <LoginIconSection title="in" />
        </View>
        <View style={styles.footerWrapper} >
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")} >
            <Text style={{ ...styles.footerText, color: COLORS.primaryOrangeHex }} >SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryBlackHex,
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 30,
  },
  imgStyle: {
    width: 400,
    height: 80,
    resizeMode: 'contain',
  },
  singText: {
    color: COLORS.White,
    fontSize: SIZES.xxLarge,
    fontWeight: "500",
    textAlign: 'center'
  },
  InputWrapper: {
    justifyContent: 'center',
    alignItems: "center",
    gap: 10
  },
  footerText: {
    color: COLORS.White,
    textAlign: 'center'
  },
  footerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    justifyContent: "center"
  }
});

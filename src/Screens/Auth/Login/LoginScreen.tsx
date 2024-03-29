import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, SIZES, images } from '../../../../constant';
import Input from '../../../../Component/Input';
import LoginInputs from './LoginInputs';
import AppButton from '../../../../Component/AppButton';
import LoginIconSection from './LoginIconSection';
import notifee, { AndroidImportance } from '@notifee/react-native'
import { GoogleSignin, statusCodes, } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

GoogleSignin.configure();
interface UserData {
  id: string;
  name: string;
  email: string;
  photo: string;
  familyName: string;
  givenName: string;
  idToken: any,

}

const LoginScreen = ({ navigation }: any) => {
  const [userInfo, setuserInfo] = useState<UserData | null>(null)
  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  const signIn = async (): Promise<any> => {
    try {
      let hasPlayServices = await GoogleSignin.hasPlayServices();
      if (hasPlayServices) {
        const { user } = await GoogleSignin.signIn();
        navigation.navigate("Main")
        setuserInfo(user)
        displayNotification()
        try {
          let result = await firestore().collection('users').doc(user.uid).set({
            name: user.name,
            familyName: user.familyName,
            givenName: user.givenName,
            id: user.id,
            photo: user.photo,
            email: user.email,
          });
        } catch (e) {
          console.log(e)
        }
        const googleCredential = auth.GoogleAuthProvider.credential(idToken)
        return auth().signInWithCredential(googleCredential);
      }
    } catch (error) {
      console.log(error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }
  };

  // const displayNotification = async (): Promise<any> => {
  //   await notifee.requestPermission()
  //   const channelId = await notifee.createChannel({
  //     id: 'Chat Notification',
  //     name: 'Chat Channel',
  //     importance: AndroidImportance.HIGH
  //   })
  //   await notifee.displayNotification({
  //     title: 'Login Successfully',
  //     body: `Welcome, ${userInfo?.name}. You have successfully logged in.`,
  //     android: {
  //       channelId,
  //     }
  //   })
  // };

  const displayNotification = () => {
    navigation.navigate("Main")
  }
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps='handled'
    >
      <View style={styles.container}>
        <View style={{ marginVertical: 25, gap: 5 }} >
          <Image source={images.Group} style={styles.imgStyle} />
          <Text style={styles.singText} >Sign in your account</Text>
        </View>
        <View>
          <LoginInputs />
        </View>
        <AppButton
          onPress={displayNotification}
          disabled={false}
          title='Sign In' />
        <View>
          <LoginIconSection
            onPressWithGoogle={signIn}
            onPressWithFacebook={() => Alert.alert("comming soon")}
            title="in" />
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


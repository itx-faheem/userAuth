import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import { COLORS, SIZES, images } from '../../../../constant';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SignUpInputs from './SignUpInputs';
import LoginIconSection from '../Login/LoginIconSection';
import AppButton from '../../../../Component/AppButton';

const SignUpScreen = ({ navigation }: any) => {
  const DimensionsHight = Dimensions.get("window").height
  console.log(DimensionsHight, "DimensionsHight");

  return (
    <ScrollView
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={{ flexGrow: 1, height: DimensionsHight * 0.95 }} >
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color={COLORS.White} />
          </TouchableOpacity>
          <Image style={styles.headerImg} source={images.Group} />
        </View>
        <View style={{ top: 10, gap: 20 }}>
          <View>
            <Text style={styles.accountText}>Create your account</Text>
          </View>
          <SignUpInputs />
          <LoginIconSection title="up" />
          <View style={styles.footerWrapper}>
            <Text style={styles.footerText}>Hava an account</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={{ ...styles.footerText, color: COLORS.primaryOrangeHex }}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryBlackHex,
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  headerImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountText: {
    color: COLORS.White,
    fontSize: SIZES.xxLarge,
    fontWeight: '500',
    textAlign: 'center',
  },
  footerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    textAlign: 'center',
    justifyContent: 'center',
    top: 15,
  },
  footerText: {
    color: COLORS.White,
    textAlign: 'center',
  },
});

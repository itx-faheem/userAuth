import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, images} from '../../constant';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryDarkGreyHex} />
      <Image
        source={images.Group}
        style={{width: 400, height: 80, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
  },
});

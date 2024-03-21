import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Main = ({ navigation }) => {
    const handleSignOut = async () => {
        try {
            await GoogleSignin.signOut();
            navigation.navigate('LoginScreen');
            console.log(JSON.stringify(GoogleSignin.signOut()));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Main</Text>
            <TouchableOpacity onPress={handleSignOut}>
                <Text>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

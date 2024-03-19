import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images } from '../../../../constant'

const LoginIconSection = ({ title }: any) => {
    return (
        <View style={{ gap: 10, top: 20 }} >
            <Text style={styles.headerText} >or sign {title} with</Text>
            <View style={{ paddingHorizontal: 10, }} >
                <TouchableOpacity onPress={() => Alert.alert('Comming soon')} style={styles.Wrapper} >
                    <Image style={styles.iconSty} source={images.facebook} />
                    <Text style={styles.textStyle} >Continue With Gmail</Text>
                    <Text style={styles.textStyle} ></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Comming soon')} style={styles.Wrapper} >
                    <Image style={styles.iconSty} source={images.google} />
                    <Text style={styles.textStyle} >Continue With Google</Text>
                    <Text style={styles.textStyle} ></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginIconSection

const styles = StyleSheet.create({
    headerText: {
        color: COLORS.White,
        textAlign: "center",
        fontSize: SIZES.font,
    },
    iconSty: {
        width: 35,
        height: 35,
    },
    Wrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderWidth: 1,
        paddingVertical: 9,
        justifyContent: "flex-start",
        borderColor: COLORS.secondaryGreyHex,
        borderRadius: 8,
        marginVertical: 5,
        paddingHorizontal: 10
    },
    textStyle: {
        color: COLORS.secondaryLightGreyHex,
    }
})
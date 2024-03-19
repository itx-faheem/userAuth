import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../../../../Component/Input'
import { COLORS, SIZES } from '../../../../constant'

const LoginInputs = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [emailEroor, setemailEroor] = useState('')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const EmailHandle = (input: string) => {
        setemail(input);
        if (!emailRegex.test(input)) {
            setemailEroor('Invalid email address');
        } else {
            setemailEroor("");
        }
        if (input.trim() === '') {
            setemailEroor("");
        }
    }
    return (
        <View style={styles.Wrapper} >
            <View style={styles.innerWrapper} >
                <Text style={styles.emailPassword} >Email</Text>
                <Input
                    style={styles.inputStyle}
                    value={email}
                    onChangeText={x => EmailHandle(x)}
                    placeholder="join.smith@gmail.com"
                />
                {emailEroor ? <Text style={styles.errorStyle} >{emailEroor}</Text> : null}

            </View>
            <View style={styles.innerWrapper} >
                <Text style={styles.emailPassword}>Password</Text>
                <Input
                    value={password}
                    onChangeText={x => setpassword(x)}
                    style={styles.inputStyle}
                    secureTextEntry={true}
                    placeholder="********" />
            </View>
        </View>
    )
}

export default LoginInputs

const styles = StyleSheet.create({
    emailPassword: {
        color: COLORS.secondaryLightGreyHex,
        fontSize: SIZES.font,
    },
    innerWrapper: {
        paddingHorizontal: 10,
        gap: 4
    },
    inputStyle: {
        color: COLORS.secondaryLightGreyHex,
        fontSize: SIZES.font
    },
    Wrapper: {
        gap: 10
    },
    errorStyle: {
        color: COLORS.red,
        fontWeight: "500",
        textAlign: "right",
        marginTop: 1,
        fontSize: SIZES.medium
    }
})
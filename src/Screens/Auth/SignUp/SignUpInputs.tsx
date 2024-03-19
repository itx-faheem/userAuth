import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from '../../../../Component/Input'
import { COLORS, SIZES } from '../../../../constant'
import AppButton from '../../../../Component/AppButton'



const SignUpInputs = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [Password, setPassword] = useState('')
    const [confirmPasswor, setconfirmPasswor] = useState('')
    const [emailError, setemailError] = useState('')
    const [errorPassword, seterrorPassword] = useState('')
    const [errorConfirmPassword, seterrorConfirmPassword] = useState(false)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordHandle = (input: string) => {
        setPassword(input)
        if (confirmPasswor && input !== confirmPasswor) {
            seterrorConfirmPassword(true)
        } else {
            seterrorConfirmPassword(false)
        }
        if (input.length < 8) {
            seterrorPassword("Password must be at least 8 characters");
        } else {
            seterrorPassword("")
        }
        if (input.trim() === '') {
            seterrorPassword("")
        }
    }
    const handlecomfirmPassword = (input: string) => {
        setconfirmPasswor(input)
        if (Password && input !== Password) {
            seterrorConfirmPassword(true)
        } else {
            seterrorConfirmPassword(false)
        } if (input.trim() === '') {
            seterrorConfirmPassword(false)
        }
    }
    const handleEmail = (input: string) => {
        setemail(input);
        if (!emailRegex.test(input)) {
            setemailError('Invalid email address');
        } else {
            setemailError("");
        }
        if (input.trim() === '') {
            setemailError("");
        }
    };

    return (
        <>
            <View style={styles.container} >
                <View style={styles.innerWrapper} >
                    <Text style={styles.emailPassword} >Name</Text>
                    <Input
                        value={name}
                        onChangeText={x => setname(x)}
                        style={styles.inputStyle}
                        placeholder="Jon smith"
                    />
                </View>
                <View style={styles.innerWrapper} >
                    <Text style={styles.emailPassword}  >Email</Text>
                    <Input
                        value={email}
                        onChangeText={x => handleEmail(x)}
                        style={styles.inputStyle} placeholder="Jon.smith@gmail.com" />
                    {emailError ? <Text style={styles.errorStyle} >{emailError}</Text> : null}
                </View>
                <View style={styles.innerWrapper} >
                    <Text style={styles.emailPassword}  >Password</Text>
                    <Input
                        value={Password}
                        onChangeText={(input) => passwordHandle(input)}
                        style={styles.inputStyle}
                        secureTextEntry={true}
                        placeholder="**********" />
                    {errorPassword ?
                        <Text style={styles.errorStyle} >{errorPassword}</Text> : null
                    }
                </View>
                <View style={styles.innerWrapper} >
                    <Text style={styles.emailPassword}  >Confirm Password</Text>
                    <Input
                        value={confirmPasswor}
                        secureTextEntry={true}
                        onChangeText={x => handlecomfirmPassword(x)}
                        style={styles.inputStyle}
                        placeholder="**********" />
                    {errorConfirmPassword ?
                        <Text style={styles.errorStyle} >Password do not match</Text> : null
                    }
                </View>
            </View>
            <View>
                <AppButton
                    disabled={!email || !name || !Password || !confirmPasswor}
                    onPress={() => Alert.alert("done")}
                    title='Sign Up' />

            </View>
        </>
    )
}

export default SignUpInputs

const styles = StyleSheet.create({
    emailPassword: {
        color: COLORS.secondaryLightGreyHex,
        fontSize: SIZES.font,
    },
    container: {
        gap: 10
    },
    innerWrapper: {
        paddingHorizontal: 10,
        gap: 4
    },
    inputStyle: {
        color: COLORS.secondaryLightGreyHex,
        fontSize: SIZES.font,
        fontWeight: "500"
    },
    errorStyle: {
        color: COLORS.red,
        fontWeight: "500",
        textAlign: "right",
        marginTop: 1,
        fontSize: SIZES.medium
    }
})
import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '../constant'


interface props {
    value: string,
    placeholder: string,
    secureTextEntry?: boolean,
    style?: object,
    onChangeText: (text: string) => void
}

const Input: React.FC<props> = ({ placeholder, secureTextEntry, style, value, onChangeText }) => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", }} >
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={[styles.inputStyle, style]}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={COLORS.primaryLightGreyHex}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: COLORS.primaryDarkGreyHex,
        paddingHorizontal: 14,
        borderRadius: 8,
        width: '100%',
    }
})
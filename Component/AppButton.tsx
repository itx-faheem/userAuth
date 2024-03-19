import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constant'

interface Props {
    title: string,
    disabled: boolean,
    onPress: () => void
}

const AppButton = ({ title, disabled, onPress }: Props) => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }} >
            <TouchableOpacity
                disabled={disabled}
                onPress={onPress}
                activeOpacity={0.5}
                style={styles.btnStyle}  >
                <Text style={{
                    color: COLORS.White
                }} >{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AppButton

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: COLORS.primaryOrangeHex,
        paddingVertical: 14,
        paddingHorizontal: 14,
        borderRadius: 20,
        width: "90%",
        justifyContent: "center",
        alignItems: "center"
    }
})

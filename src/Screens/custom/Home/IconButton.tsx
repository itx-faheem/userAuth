import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Plus from "react-native-vector-icons/AntDesign";
import { COLORS } from '../../../../constant';
const IconButton = () => {
    return (
        <TouchableOpacity style={{
            backgroundColor: COLORS.primaryOrangeHex,
            height: 30,
            width: 30,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center"
        }} activeOpacity={0.5} >
            <Plus name='plus' size={20} color={COLORS.White} />
        </TouchableOpacity>
    )
}

export default IconButton

const styles = StyleSheet.create({})
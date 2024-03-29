import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images } from '../../../../constant'

const HomeHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer} >
                <Image style={styles.imgStyle} source={images.element} />
                <Image style={styles.imgStyle} source={images.Adam} />
            </View>
            <Text style={{
                color: COLORS.White,
                fontSize: SIZES.big,
                fontWeight: '600',
                width: '60%',
                lineHeight: 36
            }} >
                Find the best {`\n`}
                coffee for you
            </Text>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    innercontainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
    },
    imgStyle: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        borderRadius: 10
    },
    container: {
        gap: 20
    }
})
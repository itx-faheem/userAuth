import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from "react-native-linear-gradient";
import { COLORS, SIZES } from "../../../../constant";
import Star from "react-native-vector-icons/AntDesign";
interface CoffeCardProp {
    id: string;
    index: number;
    type: string;
    rosted: string;
    imagelink_square: string;
    name: string;
    special_ingredient: string;
    average_rating: number;
    price: any;
    buttonPressHandle: () => void;
}

const CARD_WIDTH = Dimensions.get('window').width * 0.30;

const CoffeCarts: React.FC<CoffeCardProp> = ({
    id,
    index,
    type,
    rosted,
    imagelink_square,
    name,
    special_ingredient,
    average_rating,
    price,
    buttonPressHandle,
}) => {
    return (
        <View style={styles.container} >
            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={styles.LinearGradientStyle}
                colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
            >
                <ImageBackground
                    source={imagelink_square}
                    resizeMode='cover'
                    style={styles.CardImageBG}
                >
                    <View style={styles.CardRatingContainer} >
                        <Star name='star'
                            color={COLORS.primaryOrangeHex}
                            size={16}
                        />
                        <Text style={styles.CardRatingText}>{average_rating}</Text>
                    </View>
                </ImageBackground>
                <Text style={styles.CardTitle}>{name}</Text>
                {/* <View>
                    <Image style={styles.imgStyle} resizeMode='cover' source={imagelink_square} />
                    <Text style={styles.nameStyle}  >{name}</Text>
                </View> */}
            </LinearGradient >
        </View>
    )
}

export default CoffeCarts

const styles = StyleSheet.create({
    imgStyle: {
        borderRadius: 20,
        marginBottom: 15,
        overflow: 'hidden',
        width: 120,
        height: 120
    },
    LinearGradientStyle: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    container: {
        marginHorizontal: 10
    },
    CardTitle: {
        color: COLORS.White,
        fontSize: SIZES.font,

    },
    CardImageBG: {
        width: CARD_WIDTH,
        height: CARD_WIDTH,
        overflow: 'hidden',
        borderRadius: 20,
        marginBottom: 15
    },
    CardRatingText: {
        lineHeight: 22,
        color: COLORS.White,
        fontSize: SIZES.medium
    },
    CardRatingContainer: {
        flexDirection: "row",
        backgroundColor: COLORS.primaryBlackRGBA,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        position: 'absolute',
        right: 0,
        top: 0,
        borderBottomLeftRadius: 30,
        paddingHorizontal: 12,
    }
})
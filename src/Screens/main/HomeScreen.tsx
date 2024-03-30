import { StyleSheet, Text, View, Image, ScrollView, TextInput, Alert, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CoffeeData } from '../../data'
import { COLORS, SIZES, images } from '../../../constant'
import { CoffeCarts, HomeHeader } from '../custom/Home'
import SearchIcon from "react-native-vector-icons/AntDesign";
import AppButton from '../../../Component/AppButton'


interface Props {
    NamesData: string,
    id: number,
    isActive: any
}
const HomeScreen = () => {
    const [searchText, setsearchText] = useState('')
    const [coffeeNames, setCoffeeNames] = useState<string[]>([]);
    const [activeName, setactiveName] = useState<string>('');
    const [categoryIndex, setcategoryIndex] = useState({
        index: 0,
        category: CoffeeData
    })
    useEffect(() => {
        const names = CoffeeData.map(coffee => coffee.name);
        names.unshift("All")
        const uniqueNames = [...new Set(names)];
        setCoffeeNames(uniqueNames)
    }, [])



    const handleActiveName = (name: string) => {
        setactiveName(name);
    };
    useEffect(() => {
        if (coffeeNames.length > 0) {
            setactiveName(coffeeNames[0])
        }
    }, [coffeeNames]);

    const RenderItem: React.FC<Props> = ({ NamesData, id, }) => {
        return (
            <TouchableOpacity
                onPress={() => handleActiveName(NamesData)}
                style={styles.coffeeNamesStyle} key={id}>
                <Text style={{
                    color: activeName === NamesData ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex,
                    fontWeight: "bold",
                    fontSize: SIZES.medium
                }}  >{NamesData}</Text>
                {activeName === NamesData && (
                    <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.primaryOrangeHex }} />)
                }
            </TouchableOpacity>
        );
    };

    const RenderItemMy: React.FC<{ item: any }> = ({ item }) => {
        return (
            <>
                <CoffeCarts
                    id={item.id}
                    index={item.index}
                    type={item.type}
                    rosted={item.rosted}
                    imagelink_square={item.imagelink_square}
                    name={item.name}
                    special_ingredient={item.special_ingredient}
                    average_rating={item.average_rating}
                    prices={item.prices[2]}
                    buttonPressHandle={item.buttonPressHandle}
                />
            </>
        );
    };


    return (

        <View style={styles.container} >
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, gap: 20 }}>
                <HomeHeader />
                <View style={styles.searchWrapper} >
                    <Image source={images.search}
                        style={{ width: 25, height: 25, tintColor: searchText.length > 0 ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex, }} />
                    <TextInput
                        placeholder='Find Your Coffee...'
                        value={searchText}
                        style={styles.textInputContainer}
                        onChangeText={text => setsearchText(text)}
                        placeholderTextColor={COLORS.primaryLightGreyHex}
                    />
                </View>
                <View style={{ gap: 10 }} >
                    <FlatList
                        data={coffeeNames}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <RenderItem NamesData={item} />}
                        horizontal={true}
                    />
                </View>
                <View style={{ top: 20, }} >
                    <FlatList
                        data={CoffeeData}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <RenderItemMy item={item} />}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
        paddingVertical: 12,
        paddingHorizontal: 14
    },
    textInputContainer: {
        color: COLORS.White,
        fontSize: SIZES.medium,
        width: "85%"
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 10,
        backgroundColor: COLORS.primaryDarkGreyHex,
        borderRadius: 8,
        paddingHorizontal: 10
    },
    coffeeNamesStyle: {
        marginHorizontal: 10,
        height: 20,
        alignItems: 'center',
        marginBottom: 10
    }

})






// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import firestore from '@react-native-firebase/firestore';
// import AppButton from '../../../Component/AppButton';
// import { COLORS } from '../../../constant';

// const HomeScreen = ({ navigation }) => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         mydata();
//     }, []);

//     const mydata = async () => {
//         try {
//             firestore()
//                 .collection('users')
//                 .get()
//                 .then(querySnapshot => {
//                     let userData = [];
//                     querySnapshot.forEach(documentSnapshot => {
//                         userData.push({
//                             id: documentSnapshot.id,
//                             ...documentSnapshot.data()
//                         });
//                     });
//                     setUsers(userData);
//                 });
//         } catch (error) {
//             console.error('Error fetching user data:', error);
//         }
//     };

//     const handleSignOut = async () => {
//         try {
//             await GoogleSignin.signOut();
//             navigation.navigate('Root', {
//                 screem: "LoginScreen",
//                 initial: false,
//             });
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text>HomeScreen</Text>
//             <TouchableOpacity onPress={handleSignOut}>
//                 <Text>Sign Out</Text>
//             </TouchableOpacity>
//             <View style={{ gap: 40 }}>
//                 <AppButton title='Hello world' onPress={mydata} />
//                 {users.map(user => (
//                     <View key={user.id}>
//                         <Text>User: {user.name}</Text>
//                         <Text>User: {user.email}</Text>
//                         <Text>User: {user.email}</Text>
//                         <Image source={{ uri: user.imageUri }} style={styles.image} />
//                     </View>
//                 ))}
//             </View>
//         </View>
//     );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     image: {
//         width: 100,
//         height: 100,
//         resizeMode: 'cover',
//     },
// });


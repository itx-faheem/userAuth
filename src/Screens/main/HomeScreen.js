import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import AppButton from '../../../Component/AppButton';
import { COLORS } from '../../../constant';

const HomeScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        mydata();
    }, []);

    const mydata = async () => {
        try {
            firestore()
                .collection('users')
                .get()
                .then(querySnapshot => {
                    let userData = [];
                    querySnapshot.forEach(documentSnapshot => {
                        userData.push({
                            id: documentSnapshot.id,
                            ...documentSnapshot.data()
                        });
                    });
                    setUsers(userData);
                });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleSignOut = async () => {
        try {
            await GoogleSignin.signOut();
            navigation.navigate('Root', {
                screem: "LoginScreen",
                initial: false,
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={handleSignOut}>
                <Text>Sign Out</Text>
            </TouchableOpacity>
            <View style={{ gap: 40 }}>
                <AppButton title='Hello world' onPress={mydata} />
                {users.map(user => (
                    <View key={user.id}>
                        <Text>User: {user.name}</Text>
                        <Text>User: {user.email}</Text>
                        <Text>User: {user.email}</Text>
                        <Image source={{ uri: user.imageUri }} style={styles.image} />
                    </View>
                ))}
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    },
});



// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import firestore from '@react-native-firebase/firestore';
// import AppButton from '../../../Component/AppButton';
// import { COLORS } from '../../../constant';


// const Main = ({ navigation }) => {
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
//                     querySnapshot.forEach(documentSnapshot => {
//                         console.log(documentSnapshot.data())
//                         let DataObject = {}
//                         DataObject[documentSnapshot.id] = documentSnapshot.data()
//                         setUsers(DataObject)
//                     });
//                 });
//         } catch (error) {
//             console.error('Error fetching user data:', error);
//         }
//     };
//     const handleSignOut = async () => {
//         try {
//             await GoogleSignin.signOut();
//             navigation.navigate('LoginScreen');
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text>Main</Text>
//             <TouchableOpacity onPress={handleSignOut}>
//                 <Text>Sign Out</Text>
//             </TouchableOpacity>
//             <View style={{ gap: 40 }} >
//                 <AppButton title='Hello world'
//                     onPress={mydata}
//                 />
//                 <Image source={} />
//             </View>

//         </View>
//     );
// };

// export default Main;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });





// if (currentUser) {
//     const snapshot = await firestore()
//         .collection('users')
//         .doc(currentUser.uid)
//         .get();
//     console.log("snapshot", snapshot);
//     if (snapshot.exists) {
//         setUsers(snapshot.data());
//         console.log(snapshot.exists, "snapshot.exists");
//     }
// }

// const mydata = async () => {
//     firestore().collection('users').get().then(e => {
//         e.forEach(documentSnapshot => {
//             // console.log(documentSnapshot.data, "documentSnapshot data");
//             let usersData = {}
//             usersData[documentSnapshot.id] = documentSnapshot.data()
//             setUsers(usersData)
//             alert(usersData)
//         });
//     })
// };

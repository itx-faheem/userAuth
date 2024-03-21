import { StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigationPage from './src/Navigation/NavigationPage'
import { COLORS } from './constant'
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native'

const App = () => {

  useEffect(() => {
    (async () => {
      // let token = await messaging().getToken()
      // console.log(token)
      // await messaging().requestPermission()
    })()

    // const unsub = messaging().onMessage(async message => {
    //   const channelId = await notifee.createChannel({
    //     id: '1',
    //     name: 'chat channel',
    //     importance: AndroidImportance.HIGH
    //   })

    //   await notifee.displayNotification({
    //     id: '1',
    //     title: message.notification?.title,
    //     body: message.notification?.body,
    //     android: {
    //       channelId
    //     }
    //   })
    // })
    // return unsub
  }, [])
  return (
    <>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <NavigationContainer>
        <NavigationPage />
      </NavigationContainer>
    </>
  )
}

export default App



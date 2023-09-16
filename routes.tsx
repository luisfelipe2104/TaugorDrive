import React, { useEffect, useState, useContext } from 'react'
import { DataContext } from './contexts/DataContext'
import LandingScreen from './screens/LandingScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import UploadScreen from './screens/UploadScreen'
import ResultsScreen from './screens/ResultsScreen'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebaseConfig'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();

export default function Routes() {
    const { loggedIn, setLoggedIn } : any = useContext(DataContext)
    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setLoggedIn(true)
                setLoaded(true)
            } else {
                setLoggedIn(false)
                setLoaded(true)
            }
        })
    }, [])

    if (!loggedIn) {
        return (
            <Stack.Navigator initialRouteName='Landing'>
                <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        )
    } else {
        return (
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
                <Stack.Screen name="Upload" component={UploadScreen} options={{headerShown: false}} />
                <Stack.Screen name="Results" component={ResultsScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        )
    }
}

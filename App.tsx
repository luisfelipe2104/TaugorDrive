import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    <View>
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

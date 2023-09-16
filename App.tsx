import { StatusBar } from 'expo-status-bar';
import { DataProvider } from './contexts/DataContext';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './routes';

export default function App() {
  return (
      <NavigationContainer>
        <DataProvider>
          <Routes />
          <StatusBar backgroundColor="#000" />
        </DataProvider>
      </NavigationContainer>
  );
}


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SignedInStack from './Navigation';
import AuthNavigation from './AuthNavigation';

export default function App() {
  return (
  
    <AuthNavigation/>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Addtocart from './AddToCart';
import OnlineShopping from './OnlineShopping';
import Payement from './Payement';

export default function App() {
  return (
    
    <View style={styles.container}>
      <SafeAreaView>
      <Payement/>
      </SafeAreaView>
    
      <StatusBar style="auto" />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Addtocart from './AddToCart';
import OnlineShopping from './OnlineShopping';
import Payement from './Payement';
import ItemsList from './ItemsList';
import DetailItem from './DetailItem';

export default function App() {
  return (
    
    <View style={styles.container}>
      <SafeAreaView>
      <ItemsList/>
      </SafeAreaView>
    
      <StatusBar style="auto" />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
   
  },
});

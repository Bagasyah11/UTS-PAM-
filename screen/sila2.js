import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image,Button,Alert} from 'react-native';


export default function sila2( { navigation } ) {
  return (
    <View style={styles.cr}>
        <Image source={require('../assets/rante.png')} />
    <View style={styles.text}>
        <Text>Kemanusiaan yang adil dan beradab</Text>
    </View>
    </View>
    
  );
  
}
const styles = StyleSheet.create({
  cr: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    
  },text:{
    marginTop:40
  }
});
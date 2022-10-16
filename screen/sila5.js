import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image,Button,Alert} from 'react-native';


export default function sila5( { navigation } ) {
  return (
    <View style={styles.cr}>
        <Image source={require('../assets/padi1.png')} />
    <View style={styles.text}>
        <Text>Keadilan sosial bagi seluruh rakyat Indonesia</Text>
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
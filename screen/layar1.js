import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image,Button,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {useState} from 'react';


const fetchFont = () => {
  return Font.loadAsync({ 'bebas': require('../assets/ShadowsIntoLight-Regular.ttf')});
};
export default function layar1( { navigation } ) {
  const [fontsLoaded, setfontLoaded] = useState(false);
  if(!fontsLoaded){
    return (
        <AppLoading 
            startAsync={fetchFont}
            onError={() => console.log('ERROR')}
            onFinish={() => {
                setfontLoaded(true);
            }}
        />
    )}
  return (
    <View style={styles.cr}>

      <Image source={require('../assets/lambang.png')} />

      
    <View style={styles.button1}>
      <Button style={styles.text} title="Pengertian" onPress={() => navigation.navigate('pengertian')} />
    </View>
    <View style={styles.button1}>
      <Button style={styles.text} title="Sila Pertama" onPress={() => navigation.navigate('sila1')} />
    </View>
    <View style={styles.button1}>
      <Button style={styles.text} title="Sila Kedua" onPress={() => navigation.navigate('sila2')} />
    </View>
    <View style={styles.button1}>
      <Button style={styles.text} title="Sila Ketiga" onPress={() => navigation.navigate('sila3')} />
    </View>
    <View style={styles.button1}>
      <Button style={styles.text} title="Sila Keempat" onPress={() => navigation.navigate('sila4')} />
    </View>
    <View style={styles.button1}>
      <Button style={styles.text} title="Sila Kelima" onPress={() => navigation.navigate('sila5')} />
    </View>
    <View style={styles.button1}>
      <Button style={styles.text} title="lagu" onPress={() => navigation.navigate('layar2')} />
    </View>
    </View>
    
  );
  
}
const styles = StyleSheet.create({
  cr: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent:'space-evenly'
    
  },button1:{
    width:150,
    height:150,
  },
  text:{
    fontFamily:'bebas',
  }
});
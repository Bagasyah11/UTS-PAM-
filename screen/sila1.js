import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image,Button,Alert} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {useState} from 'react';

const fetchFont = () => {
    return Font.loadAsync({ 'shadow': require('../assets/ShadowsIntoLight-Regular.ttf')});
  };
export default function sila1( { navigation } ) {
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
        <Image source={require('../assets/bintang.png')} />
    <View style={styles.text}>
        <Text>Ketuhanan Yang Maha Esa</Text>
        </View></View>
    
    
  );
  
}
const styles = StyleSheet.create({
  cr: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'shadow',
    
  },text:{
    marginTop:40
  }
});
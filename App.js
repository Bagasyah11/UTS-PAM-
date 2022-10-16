import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image,Button,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import layar1 from './screen/layar1';
import layar2 from './screen/layar2';
import pengertian from './screen/pengertian';
import sila1 from './screen/sila1';
import sila2 from './screen/sila2';
import sila3 from './screen/sila3';
import sila4 from './screen/sila4';
import sila5 from './screen/sila5';
const Stack = createNativeStackNavigator();
export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='layar1' component={layar1} options={{headerShown : false}}/>
        <Stack.Screen name ='layar2' component={layar2} options={{headerShown : false}}/>
        <Stack.Screen name ='pengertian' component={pengertian} options={{headerShown : false}}/>
        <Stack.Screen name ='sila1' component={sila1} options={{headerShown : false}}/>
        <Stack.Screen name ='sila2' component={sila2} options={{headerShown : false}}/>
        <Stack.Screen name ='sila3' component={sila3} options={{headerShown : false}}/>
        <Stack.Screen name ='sila4' component={sila4} options={{headerShown : false}}/>
        <Stack.Screen name ='sila5' component={sila5} options={{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );}

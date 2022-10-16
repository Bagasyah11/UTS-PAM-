import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image,Button,Alert} from 'react-native';


export default function pengertian( { navigation } ) {
  return (
    <View style={styles.cr}>

      <Text>Pancasila</Text>
      <Text>Panca artinya lima dan sila artinya dasar. Jadi Pancasila adalah lima dasar dari Negara Kesatuan Republik Indonesia. Simbol gambar bintang berwarna kuning yang bersudut lima dengan latar belakang warna hitam terletak di bagian tengah perisai dijadikan sebagai dasar Ketuhanan Yang Maha Esa</Text>

    </View>
    
  );
  
}
const styles = StyleSheet.create({
  cr: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    
  },button:{
    marginTop:10
  }
});
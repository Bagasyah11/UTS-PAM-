import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image,Button,Alert} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Audio } from 'expo-av';


export default function layar2( { navigation } ) {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/lagu.mp3'));
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <View style={styles.container}>
    <Button title="Play Sound" onPress={playSound} />
    <View style={styles.lirik}>
      <Text>Indonesia tanah airku</Text>
      <Text>Tanah tumpah darahku</Text>
      <Text>Disanalah aku berdiri</Text>
      <Text>Jadi pandu ibuku</Text>
      <Text>Indonesia kebangsaanku</Text>
      <Text>Bangsa dan Tanah Airku</Text>
      <Text>Marilah kita berseru</Text>
      <Text>Indonesia bersatu</Text>
      <Text>Hiduplah tanahku</Text>
      <Text>Hiduplah negriku</Text>
      <Text>Bangsaku Rakyatku semuanya</Text>
      <Text>Bangunlah jiwanya</Text>
      <Text>Bangunlah badannya</Text>
      <Text>Untuk Indonesia Raya</Text>
      <Text>Indonesia RayaMerdeka MerdekaTanahku negriku yang kucinta</Text>
      <Text>Indonesia RayaMerdeka MerdekaHiduplah Indonesia Raya</Text>
      <Text>Indonesia RayaMerdeka MerdekaTanahku negriku yang kucinta</Text>
      <Text>Indonesia RayaMerdeka MerdekaHiduplah Indonesia Raya</Text>
    </View>
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    marginTop:50,
    
  },lirik:{
    marginTop:50,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
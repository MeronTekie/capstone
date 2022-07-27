import * as React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4DBEC'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: 'black',
    fontSize: 24,
    margin:10,
    
    padding:70,
    // fontStyle:'italic',
    fontFamily:'Snell Roundhand',
    borderColor:'black',
    fontWeight:'bold'
    
  }
})

export default function Home({ navigation }) {
	return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Image style={{height:120,width:120,borderRadius:60}} source={require('../assets/logo_size_invert.jpg')} />
          <Text style={styles.text}> A mobile application friendly with both ios and android systems,built to calculate the calories burned and distance covered within 24 hour of frame time.</Text>
        </View>
      </Swiper>
	);
}


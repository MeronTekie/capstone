import * as React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
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
    fontSize: 20,
    margin:20,
    backgroundColor:'white',
  
    
  }
})

export default function Home({ navigation }) {
	return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Image style={{height:80,width:80,borderRadius:40}} source={require('../assets/pedometer-cover.jpeg')} />
          <Text style={styles.text}>Hello Swiper sfgsdbsdbsbsdsbsgdgdsgsdgsddddbsbsdbsdbsbsbsbsdbsdbdsbdsbsdbsdbsbsbsdbdvsavsdbsdbsdbsdbsdbsdb</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
	);
}


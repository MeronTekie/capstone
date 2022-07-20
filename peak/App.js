import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
// import { Pedometer } from "expo-sensors";
import React ,{useState} from "react";
import PedometerTracker from "./components/Pedometer";



export default function App() {
 
	return (
		<View style={styles.containers}>
      <PedometerTracker/>
		</View>
	);
}
const styles = StyleSheet.create({
  containers:{
    flex:1
  }
})

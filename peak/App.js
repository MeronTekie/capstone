import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import React ,{useState} from "react";
import PedometerTracker from "./navigation/screens/Pedometer";



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

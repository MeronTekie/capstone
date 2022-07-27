import React from "react";
import {  StyleSheet, View,SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainContainer from "./navigation/MainContainer";
// import {createStackNavigator} from '@react-navigation/stack'




function App() {
	return (
		<NavigationContainer>
		    <MainContainer/>
		</NavigationContainer>	
	);
}
const styles = StyleSheet.create({
	containers: {
		flex: 1,
		backgroundColor:'#fff'
	},
});
export default App;

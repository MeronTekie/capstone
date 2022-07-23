import React from "react";
import {  StyleSheet, View,SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainContainer from "./navigation/MainContainer";



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
	},
});
export default App;

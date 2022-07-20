import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Pedo } from "react-native";
// import { Pedometer } from "expo-sensors";
// import React ,{useState}from "react";

// const [pedometer,setPedometer] = useState();

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.navbar}>
				<Text> THERE</Text>
			</View>
			<ImageBackground
				style={{ flex: 1 }}
				resizeMode="stretch"
				source={require("./assets/pedometer-cover.jpeg")}
			>
				<View style={styles.navbar}>
					<Text> THERE</Text>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	navbar: {
		marginTop: 100,
    justifyContent:'center',
	},
});

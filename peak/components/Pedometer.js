import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import { Pedometer } from "expo-sensors";

function PedometerTracker() {
	const [availability, setAvailability] = useState("");
	const [stepsNumber, setStepsNumber] = useState(0);

	Pedometer.isAvailableAsync().then(
		(result) => {
			setAvailability(String(result));
		},
		(error) => {
			setAvailability(error);
		}
	);
	subscribe = () => {
		const subscription = Pedometer.watchStepCount((result) => {
			setStepsNumber(result.steps);
		});
	};
	return (
		<View style={styles.container}>
			<ImageBackground
				style={{ flex: 1 }}
				resizeMode="stretch"
				source={require("../assets/pedometer-cover.jpeg")}
			>
				<View style={styles.navbar}>
					<Text style={styles.status}> Pedometer:{availability}</Text>
				</View>
				<View style={styles.navbar}>
					<Text> Number of Steps: {stepsNumber}</Text>
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
	status: {
		marginTop: 500,
		justifyContent: "center",
		color: "white",
		fontSize: 30,
		alignItems: "center",
		backgroundColor: "rgba(15,189,182,0.4)",
		width: 400,
		textAlign: "center",
		fontWeight: "bold",
	},
});

export default PedometerTracker;

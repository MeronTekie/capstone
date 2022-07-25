import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import { Pedometer } from "expo-sensors";
import CircularProgress from "react-native-circular-progress-indicator";
import * as Progress from "react-native-progress";
import { decay } from "react-native-reanimated";
import { v4 } from "uuid";

function PedometerTracker() {
	const [availability, setAvailability] = useState("");
	const [stepsNumber, setStepsNumber] = useState(0);
	const [pastStepCount, setPastStepCount] = useState(0);
	const [stepsStored, setStepsStored] = useState([]);


	const stepsTrack = () => {
		if (
			end.getHours() === 23 &&
			end.getMinutes() === 59 &&
			end.getSeconds() === 59 &&
			end.getMilliseconds() === 59
		) {
			setStepsNumber(...setStepsStored, {
				id: stepsStored.length,
				steps: pastStepCount,
			});
			setPastStepCount(0);
		}
	};
	const end = new Date();
	const start = new Date();
	start.setDate(end.getDate() - 1);

	const distanceGoal = 400;
	var distance = stepsNumber;
	var ditanceCovered = distance.toFixed(1) / distanceGoal;

	const distanceProgress = ditanceCovered / 1000;
	useEffect(() => {
		subscribe();
	}, []);
	subscribe = () => {
		const end = new Date();
		const start = new Date();
		start.setDate(end.getDate() - 1);
		Pedometer.getStepCountAsync(start, end).then(
			(result) => {
				setPastStepCount(result.steps);
			},
			(error) => {
				setPastStepCount("Could not get stepCount: " + error);
			}
		);
	};
	const subscription = Pedometer.watchStepCount((result) => {
		setStepsNumber(result.steps);
	});
	Pedometer.isAvailableAsync().then(
		(result) => {
			setAvailability(String(result));
		},
		(error) => {
			setAvailability(error);
		}
	);

	return (
		<View style={styles.container}>
			<ImageBackground
				style={{ flex: 1 }}
				resizeMode="stretch"
				source={require("../assets/hiking.jpeg")}
			>
				<View style={{ alignItems: "center", marginTop: 35 }}>
					<CircularProgress
						value={stepsNumber}
						maxValue={300}
						radius={150}
						inActiveStrokeColor={"black"}
						activeStrokeColor={"yellow"}
						inActiveStrokeOpacity={0.7}
						inActiveStrokeWidth={30}
						activeStrokeWidth={30}
						title={"Steps"}
						titleStyle={{ fontSize: 25, color: "black", fontWeight: "bold" }}
					/>
				</View>
				<View style={{ marginTop: 80 }}>
					<Text style={styles.indicators}>
						Distance Covered: {ditanceCovered}
					</Text>
					<Progress.Bar
						progress={distanceProgress}
						height={20}
						width={350}
						borderColor={"yellow"}
						color={"green"}
						indeterminateAnimationDuration={2000}
					/>
				</View>
				<View style={{ marginTop: 10 }}>
					<Text style={styles.indicators}>Calories: {ditanceCovered}</Text>
					<Progress.Bar
						progress={distanceProgress}
						height={20}
						width={350}
						color={"green"}
						borderColor={"yellow"}
						indeterminateAnimationDuration={2000}
					/>
				</View>
				<View style={{ marginTop: 10 }}>
					<Text style={styles.indicators}>Total Steps: {pastStepCount}</Text>
					<Progress.Bar
						progress={distanceProgress}
						height={20}
						width={350}
						borderColor={"yellow"}
						color={"green"}
						indeterminateAnimationDuration={2000}
					/>
				</View>
			</ImageBackground>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
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
		marginLeft: 10,
	},
	calorie: {
		marginTop: 25,
		justifyContent: "center",
		color: "white",
		fontSize: 30,
		alignItems: "center",
		backgroundColor: "rgba(115,188,1,0.9)",
		width: 400,
		textAlign: "center",
		fontWeight: "bold",
		marginLeft: 10,
	},
	indicators: {
		fontSize: 25,
		color: "white",
		marginTop: 5,
		marginBottom: 5,
		borderBottomEndRadius: 25,
		alignContent: "flex-start",
		borderRadius: 45,
		marginRight: 80,
		marginLeft: 10,
		fontWeight: "bold",
	},
});

export default PedometerTracker;

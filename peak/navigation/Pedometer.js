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
	// const [stepsStored, setStepsStored] = useState([]);
  //Distance Goals and covere
  let goalDistance = 0.3;
	let distanceCovered = (pastStepCount/2250).toFixed(1);
	let percentageDistanceGoal = distanceCovered/goalDistance;
	if(percentageDistanceGoal>=1){
		percentageDistanceGoal =1;
	}
 // Steps Goal 
	let goalSteps = 350;
	let totalSteps = (pastStepCount/goalSteps).toFixed(1);
	if(totalSteps>=1){
		totalSteps =1;
	}
	// let percentageStepsGoal = totalSteps/goalSteps;
  //Calorie Goals
	let goalClaories = 10;
	let totalCaloriesBurned = (pastStepCount * 0.04).toFixed(0);
	let percentageCalorieGoal = totalCaloriesBurned/goalClaories;
	if(percentageCalorieGoal>=1){
		percentageCalorieGoal =1;
	}

	const end = new Date();
	const start = new Date();
	start.setDate(end.getDate() - 1);
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
				setPastStepCount('Motion Sensor not working');
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
				<View style={{ alignItems: "center", marginTop: 25 }}>
					<CircularProgress
						value={stepsNumber}
						maxValue={goalSteps}
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
				<View style={{ marginTop: 180 }}>
					<Text style={styles.indicators}>
						Distance Covered: {distanceCovered} miles
					</Text>
					<Progress.Bar
						progress={percentageDistanceGoal}
						height={20}
						width={350}
						borderColor={"yellow"}
						color={"green"}
						indeterminateAnimationDuration={2000}
					/>
				</View>
				<View style={{ marginTop: 10 }}>
					<Text style={styles.indicators}>Calories: {totalCaloriesBurned}</Text>
					<Progress.Bar
						progress={percentageCalorieGoal}
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
						progress={totalSteps}
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

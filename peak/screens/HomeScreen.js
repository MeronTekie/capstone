import * as React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

export default function Home({ navigation }) {
	return (
		<Onboarding
    p
			pages={[
				{
					backgroundColor: "#fff",
					// image:<Image  source={require('../assets/pedometer-cover.jpeg')}/>,
					title: "About",
					subtitle: "The app is built to track burned calories",
				},
				{
					backgroundColor: "#fff",
					// image:<Image source={require()}/>,
					title: "About",
					subtitle: "The app is built to track burned calories",
				},
				{
					backgroundColor: "#fff",
					// image:<Image source={require()}/>,
					title: "About",
					subtitle: "The app is built to track burned calories",
				},
				{
					backgroundColor: "#fff",
					// image:<Image source={require()}/>,
					title: "About",
					subtitle: "The app is built to track burned calories",
				},
			]}
		/>
	);
}
const styles = StyleSheet.create({});

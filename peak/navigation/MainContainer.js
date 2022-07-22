import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import "react-native-gesture-handler";

// Screens
import PedometerTracker from "./Pedometer";
import InfoCenterScreen from "../screens/InfoCenterScreen";
import Progress from "../screens/Progress";
import Home from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Pedometer" component={PedometerTracker} />
			<Tab.Screen name="Progress" component={Progress} />
			<Tab.Screen name="Info" component={InfoCenterScreen} />
			
		</Tab.Navigator>
	);
}

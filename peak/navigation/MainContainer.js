import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Image,
	TabBarIOSItem,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";

// Screens
import PedometerTracker from "./Pedometer";
import InfoCenterScreen from "../screens/InfoCenterScreen";
import Progress from "../screens/Progress";
import Home from "../screens/HomeScreen";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "purple",
					opacity: 0.9,
				},
				headerStatusBarHeight: 70,
				tabBarActiveTintColor: "purple",
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Pedometer"
				component={PedometerTracker}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="arrow-forward-circle" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Progress"
				component={Progress}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="md-stats-chart" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Info"
				component={InfoCenterScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="information-circle" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="person-sharp" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function Profile({ navigation }) {
	return (
		<View style={styles.homeContainer}>
			<Text style={styles.homeBody} onPress={() => alert("Hi There!")}>
			Profile
			</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	homeContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	homeBody: {
		fontSize: 80,
		fontWeight: "bold",
	},
});

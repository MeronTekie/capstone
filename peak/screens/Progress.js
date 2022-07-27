
import * as React from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import {
	LineChart,
	BarChart,
	PieChart,
	ProgressChart,
	ContributionGraph,
	StackedBarChart,
} from "react-native-chart-kit";
export default function Progress({ navigation }) {
	return (
		<ScrollView  >
			<View style={styles.container}>
				<View>
					<Text
						style={{
							textAlign: "center",
							fontSize: 48,
							padding: 6,
							marginTop: 86,
						}}
					>
						Progress 
					</Text>
					<ProgressChart
						data={[0.2, 0.7, 0.5]}
						width={Dimensions.get("window").width - 16}
						height={220}
						chartConfig={{
							backgroundColor: "white",
							backgroundGradientFrom: "white",
							backgroundGradientTo: "white",
							decimalPlaces: 2,
							color: (opacity = 1) => `rgba(25, 18, 189, ${opacity})`,
							style: {
								borderRadius: 26,
							},
						}}
						style={{ marginVertical: 8, borderRadius: 16 }}
					/>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 8,
		paddingTop: 30,
		backgroundColor: "white",
	},
});

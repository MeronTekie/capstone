import * as React from "react";
import { View, Text, StyleSheet, ImageBackground,Image} from "react-native";
export default function Home({ navigation }) {
	return (
		<View style={styles.homeContainer}>
			<Image
				style={{ marginTop:30,marginLeft:120}}
				resizeMode="contain"
				source={require("../assets/logo_size_invert.jpg")}
			></Image>
		</View>
	);
}
const styles = StyleSheet.create({
	homeContainer: {
		flex: 1,
		// alignItems:'center',
		// justifyContent:'center',
    backgroundColor:'white'
	},
	homeBody: {
		fontSize: 25,
		fontWeight: "bold",
	},
});

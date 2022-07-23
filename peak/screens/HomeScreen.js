import * as React from "react";
import { View, Text, StyleSheet, ImageBackground,Image} from "react-native";
export default function Home({ navigation }) {
	return (
		<View style={styles.homeContainer}>
			{/* <Text style={styles.homeBody} onPress={()=>navigation.navigate('Home')}> Home</Text> */}
			<Image
				style={{ flex: 1,alignItems:'ceter' }}
				resizeMode="contain"
        
				source={require("../assets/logo_size_invert.jpg")}
			></Image>
		</View>
	);
}
const styles = StyleSheet.create({
	homeContainer: {
		flex: 1,
		alignItems:'center',
		justifyContent:'center',
    backgroundColor:'white'
	},
	homeBody: {
		fontSize: 25,
		fontWeight: "bold",
	},
});

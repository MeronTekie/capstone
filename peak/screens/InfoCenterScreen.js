import * as React from "react";
import { View, Text, StyleSheet ,FlatList,ScrollView} from "react-native";
import HealthInfo from "../assets/Data";
export default function InfoCenterScreen({ navigation }) {
	return (
		<View style={{flex:1}}>
		
				{HealthInfo.map((item,index) => (
          <FlatList style={styles.list} onPress={()=>alert("Hello")}>
          
              <Text style={styles.header} key={index}>{item.title}</Text>
						
					</FlatList>
				))}
		
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
		fontSize: 25,
		fontWeight: "bold",
	},
	list: {
		fontSize: 80,
		color: "green",
		borderColor: "orange",
		borderRadius: 20,
		borderWidth: 70,
	},
  header:{
    color:'black',
    fontSize:50
  }
});

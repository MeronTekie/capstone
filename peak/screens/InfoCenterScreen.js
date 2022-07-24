import * as React from "react";
import { View, Text, StyleSheet ,FlatList,ScrollView} from "react-native";
import HealthInfo from "../assets/Data";
export default function InfoCenterScreen({ navigation }) {
	return (
		<View style={styles.homeContainer}>
      {HealthInfo.map((item,index) => (
        < View style={styles.info}>
          <Text style={styles.content} key={index}>{item.title}</Text>
        </View>
      ))}

		</View>
	);
}
const styles = StyleSheet.create({
	homeContainer: {
		flex: 1,
    backgroundColor:'rgba(13,123,23,0.2)',
	},
  info:{
    flex:1,
    backgroundColor:'rgba(128, 0, 128,0.9)',
    // marginTop:1,
    // marginBottom:5,
    alignContent:'center',
    margin:12,
    borderRadius:45
  },
  content:{
    marginTop:15,
    marginBottom:15,
    fontSize:25,
    textAlign:'center',
   
    color:'white'
  }
});

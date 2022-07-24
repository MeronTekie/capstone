import * as React from "react";
import { View, Text, StyleSheet ,FlatList,ScrollView,Image} from "react-native";
import HealthInfo from "../assets/Data";
export default function InfoCenterScreen({ navigation }) {
	return (
		<ScrollView style={styles.homeContainer}>
      {HealthInfo.map((item,index) => (
        < ScrollView style={styles.info}>
          <Text style={styles.content} key={index}>{item.title}</Text>
            <Image 
            style={{height:370}}
            key={item.id} 
            source={{url:item.image}}></Image>
        </ScrollView>
      ))}
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	homeContainer: {
		flex: 1,
    backgroundColor:'rgba(13,12,23,0.2)',
	},
  info:{
    flex:1,
    backgroundColor:'rgba(128,12, 128,0.9)',
    alignContent:'center',
    margin:12,
    borderRadius:20
  },
  content:{
    marginTop:5,
    marginBottom:15,
    fontSize:25,
    textAlign:'center',
    color:'white'
  }
});

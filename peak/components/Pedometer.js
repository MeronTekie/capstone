import React ,{useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import { Pedometer } from "expo-sensors";



function PedometerTracker() {
  const [availability,setAvailability]=useState('')
  // const [pedometer,setPedometer] = useState();
  Pedometer.isAvailableAsync().then(
    (result)=>{
      setAvailability(String(result))
    }, 
    (error)=>{
      setAvailability(error);
    }
  )
  return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text> THERE</Text>
        </View>
        <ImageBackground
          style={{ flex: 1 }}
          resizeMode="stretch"
          source={require("../assets/pedometer-cover.jpeg")}
        >
          <View style={styles.navbar}>
            <Text style={styles.navbar}> {availability}</Text>
          </View>
        </ImageBackground>
      </View>
    );
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	navbar: {
		marginTop: 100,
    justifyContent:'center',
    color:'white',
    fontSize:45,
    alignItems:'center'
	},
});

export default PedometerTracker
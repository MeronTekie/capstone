import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import HealthInfo from '../assets/Data';
export default function InfoCenterScreen({navigation}){
  return(
    <View style={styles.homeContainer}>
      <Text style={styles.homeBody} onPress={()=>navigation.navigate('Home')}> {HealthInfo.map((item)=><Text style={styles.list}> {item.title}</Text>)}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  homeContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  homeBody:{
    fontSize:25,
    fontWeight:'bold',
  },
  list:{
    fontSize:80,
    color:'green',
    borderColor:'blue',
    borderRadius:20,
    borderWidth:70,

  }

})
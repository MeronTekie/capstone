import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';
export default function Home({navigation}){
  return(
    <View style={styles.homeContainer}>
      <Text style={styles.homeBody} onPress={()=>alert('Hi There!')}> Home</Text>
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
  }

})
import * as React from 'react';
import { View,Text,StyleSheet } from 'react-native';
export default function InfoCenter({navigation}){
  return(
    <View style={styles.homeContainer}>
      <Text style={styles.homeBody} onPress={()=>navigation.navigate('Home')}> Home</Text>
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
import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet
} from 'react-native'


 export default class AllComponents extends Component {
   render() {
     return (
       <View style={{ flex:1, alignItems:'center', justifyContent: 'center' }}>

        {/* ActivityIndicator(加载进度条) */}
        <View>
          <ActivityIndicator size="large" color="#00f" />
          <ActivityIndicator size="small" color="#0f0" />
        </View>
        {/* Button(按钮) */}
        <Button 
          title="click"
          onPress={() => alert('Hello World!')}
        />
        
       </View>
     )
   }
 }

 const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
   },
   horizontal: {
    flexDirection:'row',
    justifyContent: 'space-around',
    padding: 10,
   }
 })



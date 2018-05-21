import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import DetailPage from './detailPage'
export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    // headerStyle: {
    //   backgroundColor: '#ccc'
    // },
    // headerTintColor: '#000',
    // headerTitleStyle: {
    //   fontWeight: 'bold'
    // }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home page</Text>
        <Button
          title='go to detail'
          onPress={ () => {
            this.props.navigation.navigate('DetailPage', {
              itemId: 86,
              otherParam: 'anything you want here'
            })
          } }
        />
      </View>
    )
  }
}
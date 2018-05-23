import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import DetailPage2 from './detailPage2'

class LogoTitle extends Component {
  render() {
    return (
      <View style={{ width: 100 }}>
        <Button
          title='Home'
        />
      </View>
    )
  }
}

export default class Home extends Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={ () => alert('This is a button') }
        title='info'
        color='#f0f'
      />
    )
    // title: 'Home',
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
            this.props.navigation.navigate('DetailPage2', {
              itemId: 86,
              otherParam: 'anything you want here'
            })
          } }
        />
        <Button
          title='go to detail2'
          onPress={ () => {
            this.props.navigation.push('DetailPage2')
          } }
        />
      </View>
    )
  }
}
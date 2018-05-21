import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Home from './home'

export default class DetailPage extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.itemId : 'no-id',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    }
  }
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Text>Detail page</Text>
        <Text>navigation: { JSON.stringify(navigation) } </Text>
        <Text>navigationParam: { JSON.stringify(navigation.state.params.itemId) }</Text>
        <Text>itemId: { JSON.stringify(itemId) }</Text>
        <Text>otherParam: { JSON.stringify(otherParam) }</Text>
        <Button 
          title='go to detail...........again'
          onPress={() => {
            this.props.navigation.setParams({ itemId: Math.floor(Math.random() * 100) })
            // this.props.navigation.push('DetailPage', {
            //   itemId: Math.floor(Math.random() * 100)
            // })
          }}
        />
        <Button 
          title='go to home'
          onPress={ () => {
            this.props.navigation.navigate('Home')
          } }
        />
        <Button 
          title='go back'
          onPress={() => {
            this.props.navigation.goBack()
          }}
        />
      </View>
    )
  }
}
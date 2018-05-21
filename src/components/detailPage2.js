import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Home from './home.js'
export default class DetailPage2 extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>Detail Page2222222222222222</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            title='home page'
            onPress={ () => this.props.navigation.navigate('Home') }
          />
        </View>
       
        <View style={{marginTop: 10}}>
            <Button
              title='回退'
              onPress={ () => this.props.navigation.goBack() }
            />
          </View>
      </View>
    )
  }
}
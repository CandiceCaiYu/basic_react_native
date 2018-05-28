import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text,
} from 'react-native'
import {
  Button,
  ButtonGroup,
} from 'react-native-elements'
import AllNativeAPI from './allNativeApI'
import ComponentsElements from './componentsElements'

import ComponentsNative from './componentsNative'

const buttons = ['NativeAPI', 'Native']
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0,
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }
  render() {
    return (
      <View>
        <ButtonGroup 
          containerStyle={{height: 50, marginLeft:0, marginRight:0, marginTop:0, marginBottom:0}}
          onPress={this.updateIndex}
          selectedIndex={this.state.selectedIndex}
          buttons={buttons}
          buttonStyle={{ backgroundColor: '#0f0' }}
          selectedButtonStyle={{ backgroundColor: '#ff0' }}
          
        />
        {
          this.state.selectedIndex == 0 
          ? (<AllNativeAPI />)
          : (<ComponentsNative />)

        }
      </View>
    )
  }
}
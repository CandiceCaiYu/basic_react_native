import React, { Component } from 'react'
import { 
  View, Text, Button,
  AccessibilityInfo, 
  Alert,
  Animated,
  Easing,
} from 'react-native'

export default class NativeAPI extends Component {
  constructor(){
    super()
    this.state = {
      screenReaderEnable: false,
      fadeAnim: new Animated.Value(0)
    }
  }
  componentDidMount() {
    // 动画
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1, 
        easing: Easing.back(),
        duration: 2000}
    ).start();

    // 去障碍阅读
    AccessibilityInfo.addEventListener('change', this._handleScreenReaderToggled)
    AccessibilityInfo.fetch().done( isEnabled => {
      this.setState({
        screenReaderEnabled: isEnabled,
      })
    })
  }
  render() {
    return (
      <View>
        <Animated.View style={{ width: 250, height: 50, backgroundColor: '#00f', opacity: this.state.fadeAnim }}>
          <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }} >Fading in</Text>
        </Animated.View>

        <Text>
          The Screen reader is { ' ' }
          { this.state.screenReaderEnable ? 'enabled': 'disabled' }
        </Text>
        <Button 
          title = 'Alert'
          onPress = {() => Alert.alert(
            'Alert Title',
            'messge',
            [
              { text: 'Ask me later', onPress: () => console.log('asked me later pressed!') },
              { text: 'Cancel', onPress: () => console.log('Cancel pressed!'), style: 'cancel' },
              { text: 'OK', onPress: () => console.log('OK pressed') }
               
            ]) }
        />
      </View>
    )
  }
}
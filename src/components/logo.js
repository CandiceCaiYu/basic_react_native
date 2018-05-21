
import React, { Component } from 'react'
import { View, Text, TextInput, Image,Button, Alert, StyleSheet,YellowBox } from 'react-native'
import Home from './home'

/*
react-native bug, v0.55
*/
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

export default class Logo extends Component {
  static navigationOptions = {
    title: 'Logo'
  }
  render() {
    return (
      <View style={styles.container}>
          {/* <Image source={require('./img/qq.jpg')} style={styles.imgWrap} /> */}
          <TextInput
            placeholder='QQ号/手机号/邮箱'
            underlineColorAndroid='#fff'
            style={[styles.inputWrap, { marginBottom:1 }]}
          />
          <TextInput
            placeholder='..............'
            underlineColorAndroid='#fff'
            style={styles.inputWrap}
          />
          <View style={styles.btnWrap}>
            <Button
              title= '登录'
              // onPress={this._onPressBtn}
              onPress={ () => this.props.navigation.push('Home') }
            />
          </View>
          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // width: 100%,
    // height: 100,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ccc'
  },
  imgWrap: {
    width: 70,
    height: 70,
    marginTop: 70,
    marginBottom: 20,
    borderRadius: 35,
  },
  inputWrap: {
    height: 50,
    alignSelf: 'stretch',
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  btnWrap: {
    alignSelf: 'stretch',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    // fontSize: 18,
  }
})
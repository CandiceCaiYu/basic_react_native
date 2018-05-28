import React, { Component } from 'react'
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  Button,
  DatePickerIOS,
  DrawerLayoutAndroid,   //侧边栏
  FlatList,              //列表（ul）
  Image,
  MaskedViewIOS,
  Modal,                 //弹窗
  Picker,                //选择
  ProgressBar,           //进度条 only Android
  SectionList,           
  Slider,                //可拖动进度条
  StatusBar,
  // Navigator,
  ToolbarAndroid,
  TouchableHighlight,
  TouchableNativeFeedback,   //android only
  TouchableOpacity,
  TouchableWithoutFeedback,

  ViewPagerAndroid,
  WebView,
} from 'react-native'

import CommonModal from '../common/Dialog'


export default class ComponentsNative extends Component {
  constructor(){
    super()
    this.state = {
      modalVisible: false,
      language: [],
      sliderValue: 0,
    }
  }
  setModalVisible = (visible) => {
    this.setState({
      modalVisible: visible
    })
  }
  onActionsSelected = (position) => {
    if(position) {
      showSettings();
    }
   }
  render() {
    const navigationView = (
      <View style={{ flex:1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign:'left' }}>I'm in the Drawer!</Text>
      </View>
    )
    const overrideRenderItem = ({ item, index, section:{ title, data } }) => <Text key={index}>Override {item}</Text>
    console.log('render Native')
    console.log(this.state.modalVisible)


    return (
      <ScrollView style={{marginBottom: 50}}>
      <WebView 
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginBottom: 20, height: 300, backgroundColor: '#0f0', alignItems: 'center'}}
        initialScale={30}
      />
      <ViewPagerAndroid
        initialPage={0}
        style={{ flex:1 }}
      >
        <View key='1' style={{ alignItems: 'center' }}>
          <Text>first page</Text>
        </View>
        <View key='2' style={{ alignItems: 'center' }}>
          <Text>second page</Text>
        </View>
      </ViewPagerAndroid>
      <TouchableHighlight 
        activeOpacity={3}
        style={{ alignItems: 'center', backgroundColor: '#ddd', padding: 10 }}
        onPress={() => console.log('TouchableHighlight is touching!')}>
        {/* <Image source={require('../../img/1.jpg')} /> */}
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>

      <TouchableNativeFeedback 
        onPress={() => console.log('TouchableNativeFeedback is touching')}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
      <View style={{ height: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f00', marginTop:10 }}>
        <Text style={{color:'#fff', }}>TouchableNativeFeedback</Text>
      </View>
      </TouchableNativeFeedback>

      <TouchableOpacity
        style={{ backgroundColor:'#00f', height: 30, marginTop:10, alignItems: 'center', justifyContent: 'center' }}
        activeOpacity={0.3}
        onPress={ () => console.log('TouchableOpacity is touching')}
      >
        <Text style={{ color: '#fff' }}>TouchableOpacity</Text>
      </TouchableOpacity>
      <View style={{ backgroundColor: '#1a9', height: 30, marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableWithoutFeedback 
          onPress={() => console.log('TouchableWithoutFeedback is touching!')}
          >
          <View>
            <Text style={{ color: '#000' }} >TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <ToolbarAndroid
        logo={require('../../img/1.jpg')}
        title='AwesomeApp'
        actions={[{ title: 'Setting', icon: require('../../img/2.jpg'), show: 'always' }]}
        onActionSelected={this.onActionSelected}
      />
      <View>
        <StatusBar 
          backgroundColor='#00f'
          barStyle="light-content"
        />
      </View>
      <Slider
        minimumValue={0}
        maximumValue={100}
        style={{height:10, marginTop: 30 }}
        // disabled
        minimumTrackTintColor='#f00'   //已完成
        onSlidingComplete={() => console.log('sliding finished!')}
        onValueChange={sliderValue => this.setState({sliderValue})}
        step={1}   //每次拖动的数字，默认会有小数
      />
      <Text>Value: {this.state.sliderValue}</Text>
      <SectionList
        renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
        renderSectionHeader={({section: {title}}) => <Text style={{fontWeight: 'bold'}}>{title}</Text>}
        sections={[
          {title: 'Title1', data:['item1', 'item2'], renderItem: overrideRenderItem},
          {title: 'Title2', data:['item3', 'item4']},
          {title: 'Title3', data:['item5', 'item6']},
        ]}
        keyExtractor={(item, index) => item + index}
        initialNumToRender={3}
        //inverted //倒序
        ListHeaderComponent={() => <Text style={{ color: '#0f0'}}>Header Begining</Text>}
        ListFooterComponent={() => <Text style={{ color: '#0ff' }}>Footer Ending</Text>}
        ListEmptyComponent={() => <Text>no data</Text>}   //section=[]
     />

      <View style={{ width: 100 }}>
        {/* <ProgressBar
          color = '#f00'
          // progress= {1}
          styleAttr='Inverse'

        /> */}
      </View>
      <Picker
        selectedValue={this.state.language}
        style={{ width: 200, height: 50, borderWidth:3}}
        itemStyle={{ color:'#f00' }}
        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue}) }
        mode='dropdown'
      >
        <Picker.Item label='Java' value='java' />
        <Picker.Item label='Javascript' value='js' />
      </Picker>

       <ActivityIndicator size={20} color='#00f' />
       <Button
         title='button'
         onPress={() => console.log('button is pressed')}
       />
       <DatePickerIOS 
        date={new Date()}
       />
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={ DrawerLayoutAndroid.positions.Left }
          renderNavigationView={ () => navigationView }>
          <View style={{ flex:1, alignItems: 'center' }}>
            <Text style={{ margin:10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
            <Text style={{ margin:10, fontSize: 15, textAlign: 'right' }}>World!</Text>
          </View>
        </DrawerLayoutAndroid>
        <FlatList
          data={[{ key: 'a' }, { key: 'b' }]}
          renderItem={({ item }) => <Text style={{ borderBottomColor:'#f00' }}>{item.key}</Text>}
          style={{ height: 40 }}
        />
        <View style={{ flex:1, alignItems:'center', justifyContent: 'center', marginBottom: 20, borderWidth:3,borderColor:'#dcd', borderRadius:8, margin:30, padding: 20 }}>
          <Text>Image is Here</Text>
          <Image
            source={require('../../img/3.jpg')}
            style={{width: 250, height: 250, marginTop: 20, resizeMode:'cover'}}
            // getSize={(uri) => console.log(uri)} 静态资源不支持
          />
        </View>
        <MaskedViewIOS
          style={{ flex:1, flexDirection: 'row', height: 100, marginBottom:30 }}
          maskElement={
            <View style={{
              backgroundColor: '#ccd',
              flex:1,
              justifyContent: 'center',
              alignItems: 'center'}}>
              <Text style={{
                fontSize: 60,
                color: '#000',
                fontWeight: 'bold'}}>Basic Mask</Text>
            </View>
            }
          >
          <View style={{ flex:1, height: '100%', backgroundColor: '#324376' }} />
          <View style={{ flex:1, height: '100%', backgroundColor: '#F5DD90' }} />
          <View style={{ flex:1, height: '100%', backgroundColor: '#F76C5E' }} />
        </MaskedViewIOS>
        <View style={{ position: 'relative', flex:1, alignItems: 'center', justifyContent:'center' }}>
          <Modal
            animationType='slide'
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {console.log('modal has been closed')}}
            // hardwareAccelerated={true}
            onShow={() => console.log('modal showing')}
          >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <View style={{
              backgroundColor: '#fff', height: 300, width: 300, 
              alignItems: 'center', justifyContent: 'center',
            }}>
              <Text>Hello World</Text>
              <TouchableHighlight
                onPress={() => this.setModalVisible(!this.state.modalVisible)}
                style={{ 
                  width: 100, 
                  height: 50, 
                  borderRadius: 8,
                  backgroundColor: '#00f', 
                }}
              >
                <Text style={{ 
                  color: '#fff',
                  fontWeight: 'bold',
                  lineHeight: 50,
                  textAlign: 'center',
                   }}>Toggle Modal</Text>
              </TouchableHighlight>
              </View>
            </View>
          </Modal>
         
        </View>
        <Button
          title="show modal"
          onPress={() => this.setModalVisible(!this.state.modalVisible)}
         />
      </ScrollView>
    )
  }
}
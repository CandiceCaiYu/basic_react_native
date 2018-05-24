import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
} from 'react-native'
import { 
  Badge,
  ButtonGroup,
  Card,
  CheckBox, 
  Divider,
  Header, 
  Icon,
  Input,
  ListItem,
  Overlay,
  Button,
  PricingCard,
  Rating,
  SearchBar,
  Slider,
  SocialIcon,
  Text,
  Tile,
} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: require('../../img/1.jpg'),
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: require('../../img/2.jpg'),
    subtitle: 'Vice Chairman'
  },
]
const users = [
  {
    name: 'Brynn',
    text: '了深刻的减肥路上看到就分开来说拉丝款减肥路上看到就付了款收到浪费时间对方离开时间到了福克斯老师肯定发了啥快递费',
    avatar: require('../../img/1.jpg')
  }
  
]

export default class TheForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: true,
      show: true,
      searchText: '',
      sliderValue: 0,
      selectedIndex: 2,
    }
    this.toggleCheck = this.toggleCheck.bind(this)
    this.searchChange = this.searchChange.bind(this)
    this.updateIndex = this.updateIndex.bind(this)
  }

  toggleCheck() {
    let prev = this.state
    this.setState( {
      checked: !prev.checked
    })
  }
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating)
  }
  searchChange(text) {
    this.setState({
      searchText: text
    })
  }
  searchClear() {
    console.log('clear')
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }
  render() {
    console.log('render')
    const buttons = ['Hello', 'World', 'Buttons']
    const { selectedIndex } = this.state
    return (
      <ScrollView>
        <Header
          placement="left"
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'App', style:{ color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: '#0af' }}
          innerContainerStyles={{ justifyContent: 'space-around' }}
        />
        <CheckBox 
          center
          title="A"
          iconRight
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checkedColor='red'
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked })}
          size={30}
        />
        {/* 分割线 */}
        <Divider style={{ backgroundColor: 'blue' }} />
        <Icon 
          name='rowing'
          color='#00aced'
        />
        <Icon 
          reverse
          name='g-translate'
          color='#00aced'
          onPress={() => { console.log('g-translate') }}
        />
        <Divider style={{ backgroundColor: 'blue' }} />
       {/* <Input 
        placeholder='input icon'
       /> */}
      <View>
        {
          list.map((l,i) => (
            <ListItem
              key={i}
              leftAvatar={ source= l.avatar_url}
              title={l.name}
              subtitle={l.subtitle}
              badge={{ value:i, textStyle:{ color: 'orange' }, containerStyle: {marginRight: 10} }}
              scaleProps={{
                friction: 90,
                tension: 100,
                activeScale: 0.95
              }}
              linearGradientProps={{
                color: ['#FF9800', '#F44336'],
                start: [1, 0],
                end: [0.2, 0]
              }}
              ViewComponent={LinearGradient}
              chevronColor='#f0f'
              chevron
            />
          ))
        }
      </View>
      <Button 
        title='OverLay'
        onPress={ () => this.setState({ show: !this.state.show }) }
      />
      {/* 弹窗 */}
      {/* <Overlay
        isVisible={this.state.show}
        windowBackgroundColor='rgba(255,255,255,.5)'
        overlayBackgroundColor='red'
        width='auto'
        height='auto'
      >
        <Text>Hello from Overlay!</Text>
      </Overlay> */}
      <PricingCard
        color="#4f9deb"
        title='Free'
        price='￥0'
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title:'Get start', icon: 'flight-takeoff' }}
      />
      <Rating
        showRating
        onFinishRating={this.ratingCompleted}
        style={{ paddingVertical: 10 }}
        type='heart' //使用自定义图片时位custom, 五角星就用star, 火箭rocket,铃铛bell,心心heart
        // 小数位数
        fractions={0}
        startingValue={3}
        // readonly
        ratingCount={5}
        ratingImage={require('../../img/2.jpg')}
        ratingColor='#f0f'
        ratingBackgroundColor='#0ff'
      />
      <SearchBar
        // lightTheme
        platform='android'
        showLoading
        // round
        searchIcon={{ size: 30 }}
        clearIcon={{ color: 'red' }}
        onChangeText = {this.searchChange}
        onClear={this.searchClear}
        placeholder='Type Here.........'
      
        cancelIcon={{ type: 'font-awesome', name:'chevron-left' }}
        
      />
      <View style={{ 
        width: 300, 
        height: 50, 
        alignItems:'center', 
        justifyContent: 'center', 
        backgroundColor: '#ccc', 
        margin: 20,
        borderRadius: 8,
      }}>
        <Text>{this.state.searchText}</Text>
      </View>
      {/* 进度条 */}
      <View style={{ flex:1, alignItems:'stretch', justifyContent: 'center' }}>
        <Slider
          value={this.state.sliderValue}
          onValueChange={sliderValue => this.setState({sliderValue})}
          animateTransitions
          // 背景进度条
          maximumTrackTintColor='#f0f'
          // 外容器样式
          style={{ width: 300 }}
          // 按钮样式
          thumbStyle={{ backgroundColor: '#044', width: 20, height: 20, borderRadius: 10 }}
          maximumValue={100}
          onSlidingComplete={() => console.log('slider finished!')}
          onSlidingStart={() => console.log('slider started')}
        />
        <Text>sliderValue: {this.state.sliderValue}</Text>
      </View>
      <SocialIcon
        // raised={false}
        // light
        button
        loading
        title='Sign in with Twitter'
        type='twitter'
        onPress={() => console.log('sign in with Twitter')}
        underlayColor='#00f'
      />
      <Text h1>Heading 1</Text>
      <Text h2>Heading 2</Text>
      <Text h3>Heading 3</Text>
      <Text h4>Heading 4</Text>
      <Text h4 style={{fontSize: 30, color: '#00f' }}>Heading 4</Text>
      {/* 图文 */}
      <Tile
        imageSrc={ require('../../img/3.jpg') }
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
        featured
        caption='Some Caption Text'
        icon={{ name: 'play-circle', type: 'font-awesome' }}
        containerStyle={{ height: 300 }}
      />
      <Badge
          value={33}
          textStyle={{ color: '#fff' }}
          containerStyle={{ backgroundColor: 'violet' }}
          wrapperStyle={{ width: 50, height: 30 }}
          onPress={() => { console.log('pressed && value = 33') }}
        />
       <Button 
        title='BUTTON'
        loading
        loadingProps={{ size: "large", color: "rgba(111,202, 186,1)" }}
        titleStyle={{ fontWeight: "700" }}
        buttonStyle={{ 
          backgroundColor: "rgba(92,99,216,1)",
          width: 200,
          height: 45,
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5,
        }}
        // disabled
        icon={{
          name:'airplay',
          size: 15,
          color: '#fff'
        }}
        // iconContainerStyle={{ width: 60, height: 60 }}
        containerStyle={{ marginTop: 20, marginLeft: 0 }}
        onPress={() => console.log('This is buuton')}
      />
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 50 }}
        buttonStyle={{ backgroundColor: '#ff0' }}
        selectedButtonStyle={{ backgroundColor:'#0f0' }}
      />
      <Card title='Card width divider'>
        {
          users.map((user, index) => {
            return (
              <View key={index}>
                
                <Image resizeMode='cover' source={user.avatar} />
                <Text style={{ marginTop: 20, marginBottom: 20 }}>{user.text}</Text>
                <Text>{user.name}</Text>
              </View>
            )
          })
        }
      </Card>
    </ScrollView>
    )
  }
} 
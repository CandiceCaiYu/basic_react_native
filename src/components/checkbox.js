import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native'
import { 
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

export default class TheForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: true,
      show: true,
    }
    this.toggleCheck = this.toggleCheck.bind(this)
  }
  toggleCheck() {
    let prev = this.state
    this.setState( {
      checked: !prev.checked
    })
  }
  reatingCompleted(rating) {
    console.log('Rating is: ' + rating)
  }
  render() {
    console.log(list)
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
        type='star'
        fractions={1}
        startingValue={3.6}
        readonly
        ratingCount={3}
      />
    </ScrollView>
    )
  }
} 
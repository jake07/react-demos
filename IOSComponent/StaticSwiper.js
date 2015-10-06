var React = require('react-native')
var Swiper = require('react-native-swiper')
var Ticket = require('./Ticket');
var {
  StyleSheet,
  Text,
  View,
} = React

var styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#aaa',
    fontSize: 10,
    fontWeight: 'bold',
  }
})

var StaticSwiper = React.createClass({
  _onMomentumScrollEnd: function (e, state, context) {
    // you can get `state` and `this`(ref to swiper's context) from params
    console.log(state, context.state)
  },
  render: function() {
    return (
      <Swiper style={styles.wrapper}
      height={300}
      onMomentumScrollEnd={this._onMomentumScrollEnd}
      showsButtons={false}
      dot={<View/>}
      activeDot={<View/>} >
        <View style={styles.slide}>
          <Ticket />
        </View>
        <View style={styles.slide}>
          <Ticket />
        </View>
        <View style={styles.slide}>
          <Ticket />
        </View>
      </Swiper>
    );
  }
});

module.exports = StaticSwiper;


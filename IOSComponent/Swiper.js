var React = require('react-native')
var Swiper = require('react-native-swiper')
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

var swiper = React.createClass({
  getInitialState: function() {
    return {
      tickets: []
    };
  },
  _onMomentumScrollEnd: function (e, state, context) {
    // you can get `state` and `this`(ref to swiper's context) from params
    console.log(state, context.state)
  },
  componentDidMount: function() {
    console.log('mount');
    this.setState({
      tickets: [ {accessCode: 'ac1', orderID: '1'},
      {accessCode: 'ac2', orderID: '2'},
      {accessCode: 'ac3', orderID: '3'} ]
    });
  },
  render: function() {
    return (
      <Swiper style={styles.wrapper}
      height={300}
      onMomentumScrollEnd={this._onMomentumScrollEnd}
      showsButtons={false}
      dot={<View/>}
      activeDot={<View/>} >

        {this.state.tickets.map(function(ticket) {
          return (
            <View style={styles.slide}>
              <Text style={styles.text}>Access Code: {ticket.accessCode}</Text>
              <Text style={styles.text}>Order ID: {ticket.orderID}</Text>
            </View>
          );
        })}
      </Swiper>
    );
  }
});

module.exports = swiper;


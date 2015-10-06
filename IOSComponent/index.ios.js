'use strict'

var React = require('react-native')

var {
  AppRegistry,
} = React;

var swiper = require('./StaticSwiper')

AppRegistry.registerComponent('IOSComponent', () => swiper)

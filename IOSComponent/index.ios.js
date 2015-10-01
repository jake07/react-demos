'use strict';

var React = require('react-native');
var Slidebar = require('./Slidebar');

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

class SlidebarImpl extends React.Component {
  render() {
    return (
      <React.NavigatorIOS 
        style={styles.container}
        initialRoute={{
          title: 'Slidebar',
          component: Slidebar
        }}/>
    );
  }
}

React.AppRegistry.registerComponent('IOSComponent', function() {return SlidebarImpl});

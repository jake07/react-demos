'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');
var scrollview = require('./scrollview');
var progressviewios = require('./progressviewios');
var sliderios = require('./sliderios');
var pickerios = require('./pickerios');
var tabbarios = require('./tabbarios');
var s1 = require('./switchios');
var webview = require('./webview');

var styles = React.StyleSheet.create({
	text: {
		color: 'black',
		backgroundColor: 'white',
		fontSize: 30,
		margin: 80
	},
	container: {
		flex: 1
	}
});

class HelloWorld extends React.Component {
	render() {
		return (<React.Text style={styles.text}>Hello World (Again)</React.Text>);
	}
}

class ExampleApp extends React.Component {
	render() {
		return (
			<React.NavigatorIOS 
				style={styles.container}
				initialRoute={{
					title: 'Example Application',
					component: scrollview
				}}/>
		);
	}
}

React.AppRegistry.registerComponent('example', function() {return ExampleApp});

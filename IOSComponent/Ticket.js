var React = require('react-native');
var {
	StyleSheet,
	Image,
	Text,
	View
} = React;

var styles = StyleSheet.create({
	view: {
		flex: 1,
		justifyContent: 'flex-start'
	},
	image: {
		flex: 1
	},
	text: {
		color: '#aaa',
		fontSize: 10,
	}
});

var Ticket = React.createClass({
	render: function() {
		return (
			<View style={styles.view}>
				<Image style={styles.image} source={{uri: 'http://a.hiphotos.baidu.com/image/w%3D310/sign=4459912736a85edffa8cf822795509d8/bba1cd11728b4710417a05bbc1cec3fdfc032374.jpg'}} />
				<Text style={styles.text}>Access Code: </Text>
				<Text style={styles.text}>Order ID: </Text>
			</View>
		);
	}
});

module.exports = Ticket;

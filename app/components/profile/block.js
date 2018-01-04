import React, {Component} from 'react'
import {View, Text, Button, Image, StyleSheet, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'; 
class Block extends Component {

	onClick = () => this.props.onPress? this.props.onPress(this.props.name) : null
	render() {
		//let imageStyle = this.props.imageStyle ? this.props.style : {}
		return (
			<TouchableOpacity style={this.props.style} onPress={this.onClick}>
			   <Text style={styles.text}>{this.props.name}</Text>
			   <Image source={this.props.pic} style={this.props.imageStyle}/>
			   {this.props.amount && <Text style={styles.text}>{this.props.amount}</Text>}
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	text: {
		fontWeight: 'bold',
		fontSize: 20
	},
})

Block.propTypes = {
  name: PropTypes.string,
  pic:  PropTypes.oneOfType([
  	PropTypes.shape({
    	uri: PropTypes.string,
  	}),
  	PropTypes.number,
]) 
}

export default Block
import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window')
const _CONTAINER_WIDTH = width-60
const _CONTAINER_HEIGTH = height/12
const _PICKER_WIDTH = (_CONTAINER_WIDTH)* (4/6)
const _LIFT_WIDTH = (_CONTAINER_WIDTH) * (1/6)
class QuantityPicker extends Component {

	render(){
		return(
			<View style={styles.container}>
				<View style={styles.lift}> 
					<TouchableOpacity onPress={() => this.props.changeValue(Number(this.props.amount)-1)}> 
						<Image source={require('boater/app/assets/plus.png')} />
					</TouchableOpacity>
				</View>		
				<View style={styles.picker}> 
					<Text style={styles.value}>{this.props.amount}</Text> 
				</View>
				<View style={styles.lift}> 
					<TouchableOpacity onPress={() => this.props.changeValue(Number(this.props.amount)+1)}> 
						<Image source={require('boater/app/assets/minus.png')} />
					</TouchableOpacity>
				</View>	
			</View>
		)
	}
}  


const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'white',
		alignItems: 'center'
	},
	lift: {
		width: _LIFT_WIDTH,

	},
	picker: {
		width: _PICKER_WIDTH,
		backgroundColor: 'brown',
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	value: {
		fontSize: 25,
		color: 'white'
	}
})

export default QuantityPicker
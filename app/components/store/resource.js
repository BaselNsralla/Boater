import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import {fToUpperCase} from 'boater/app/utils/utils'
class Resource extends Component {
	
	constructor(props) {
	  super(props);
	}

	openModal = () => {
		console.log('!"#QWE', this.props)
		let {type} = this.props
		//Action Creator to change current data for modal
		this.props.changeCreatorModalType(type)
		this.props.changeModalState(true)
	}

	render(){
		return(
			<TouchableOpacity onPress={this.openModal} style={styles.container}>
				<Text>{fToUpperCase(this.props.type)}</Text>
				<Text>{this.props.amount}</Text>
			</TouchableOpacity>
		)
	}
}  

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		minWidth: 100,
		backgroundColor:'blue',
		margin: 10,
		flex: 1
	}
})
export default Resource
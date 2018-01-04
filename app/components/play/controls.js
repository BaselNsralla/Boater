import React, {Component} from 'react'
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native'


class Controls extends Component {
	
	navigate = (route) =>  {
		this.props.navigation.navigate(route)
	}
	render () {
		return (
			<View style={styles.container}> 
				<View style={[styles.button, styles.storeButton]} >
					<TouchableOpacity onPress={() => this.navigate('Store')}>
						<Text>MANAGE STORE</Text>
					</TouchableOpacity> 
				</View>
				<View style={[styles.button, styles.chatButton]} >
					<TouchableOpacity  onPress={() => this.navigate('chat')}>
						<Text>Chat</Text>
					</TouchableOpacity>
				</View>
			</View>
		) 
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row'
	}, 
	button: {
		flex : 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin : 5,
		borderRadius: 5,
		width: 24
	},
	storeButton: {
		backgroundColor: '#69b6ff'
	},

	chatButton: {
		backgroundColor: 'green'
	}

})

export default Controls
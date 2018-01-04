import React, {Component} from 'react'
import {View , Text, Image, StyleSheet, Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window')
class Profile extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	fullName: 'Name Lastname'
	  };
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.profileHolder}>
			   	  <View style={styles.persona}> 
					<Image style={styles.avatar} source = {require('boater/app/assets/default_avatar.png')} />  
					<Text style={styles.name}>{this.state.fullName}</Text>
				  </View>
				  <View style={styles.details}> 
				  </View> 
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#61b4f4',
		flex: 1,
		width: width  
	},
	profileHolder: {
		flex : 1,
		margin: 10,
		marginTop: 30,
		borderRadius: 5,
		backgroundColor: 'rgba(52, 52, 52, 0.3)',
		justifyContent: 'center'
	},
	avatar : {
		width: 80,
		height: 80
	},
	name: {
		color: 'white',
		padding: 5
	},
	persona: {
		flex: 3,
		alignItems: 'center',
		margin: 10
	},
	details: {
		flex:1,
		padding: 10,
		
	}
})

export default Profile
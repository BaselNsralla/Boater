import React, {Component} from 'react'
import { View, Text, StyleSheet , Dimensions } from 'react-native'
import {Travel, Profile, Resources} from '../components'
const {width, height} = Dimensions.get('window')
class ProfilePage extends Component {
	render() {
		return (
			<View style={this.props.standardStyles.container}>
				<Profile />
				<Resources />
			</View>
		);
	}
}



export default ProfilePage
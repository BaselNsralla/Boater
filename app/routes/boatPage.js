import React, {Component} from 'react'
import { View, Text } from 'react-native'
import {Village} from '../components'
class BoatPage extends Component {
	constructor(props) {
	  super(props);
	  this.state = {...props};
	}

	componentDidMount () {
		//getProfile
	}

	render() {
		return (
			<View style ={this.props.standardStyles.container}>
				{this.state.hosted ? <Hosted /> : <Village {...this.props}/>}
			</View>
		);
	}
}

BoatPage.defaultProps = {
  hosted: false 
}

export default BoatPage
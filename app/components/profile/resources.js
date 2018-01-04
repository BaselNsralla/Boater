import React, {Component} from 'react'
import {View, Text, Button, Image, StyleSheet, Dimensions} from 'react-native'
import Block from './block.js'
const {width, height} = Dimensions.get('window')
class Resources extends Component {
	 constructor(props) {
	   super(props);
	 
	   this.state = {...props};
	 }

	 componentDidMount() {
	 	// server.getPlayersInfo().then(data => {
	 	// 	this.setState({
	 	// 		resources : data.resources,
	 	// 		user: data.user
	 	// 	})
	 	// })
	 }

	 render() {
	 	return (
	 		<View style={styles.container}>
	 			<View style={styles.horizon}> 
	 				<Block style={[styles.block, {backgroundColor: '#8d6e63'}]} 
	 					pic={require('boater/app/assets/stone.png')} 
	 					name='Stone'
	 					amount={this.state.resources.stone}
	 				/>
	 				<Block style={[styles.block, {backgroundColor: '#ff7043'}]} 
	 					pic={require('boater/app/assets/fire.png')} 
	 					name='Fire'
	 					amount={this.state.resources.fire}
	 				/>
	 			</View>
	 			<View style={styles.horizon}> 
	 				<Block 
	 					style={[styles.block,{backgroundColor: '#d3b8ae'}]} 
	 					pic={require('boater/app/assets/wood.png')} 
	 					name='Wood'
	 					amount={this.state.resources.wood}
	 					/>
					<Block 
						style={[styles.block,{backgroundColor: '#69b6ff'}]} 
						pic={require('boater/app/assets/water.png')} 
						name='Water'
						amount={this.state.resources.water}
						/>
	 			</View>
	 		</View>
	 	);
	 }
}

const bluePick = ['#1b87e5', '#69b6ff']
const styles = StyleSheet.create({
	container: {
		flex: 2,
		flexDirection: 'column',
		backgroundColor: '#212121'
	},
	block: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin :2,
		borderRadius: 5
	},
	horizon: {
		flex: 1,
		width: width,
		flexDirection: 'row'
	}
})


Resources.defaultProps = {
   resources: {
   		stone: 52,
   		fire: 123,
   		wood: 324,
   		water: 57
   },
   user: {
   	name: 'Name',
   	lastname: 'Lastname'
   }
}
export default Resources
import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import {fToUpperCase} from 'boater/app/utils/utils'
class StoreItem extends Component {

	getButtonStyle() {
		const buttonStyle = {backgroundColor:''} 
		buttonStyle.backgroundColor = this.props.owner ? 'red' : '#088975' 
		return buttonStyle
	}

	render(){
		return(
			<View style={styles.container}>
				<View style={styles.textContaienr}>
					<Text style={styles.descHeadline}>{`Trading: `}</Text>
					<Text style={styles.descText}>{`${fToUpperCase(this.props.item)} ${this.props.amount}`}</Text>
				</View>
				<View style={styles.textContaienr}>
					<Text style={styles.descHeadline}>{`Cost: `}</Text>
					<Text style={styles.descText}>{`${fToUpperCase(this.props.costType)} ${this.props.cost}`}</Text>
				</View>
				<View style={{flex:1}}>
					<TouchableOpacity style={[styles.button,  this.getButtonStyle()]}>
						<Text style={styles.buttonText}>{this.props.owner ? 'REMOVE' : 'TRADE'}</Text>
					</TouchableOpacity> 
				</View>
			</View>
		)
	}
}  
//<Text>{`${this.props.costAmount} ${this.props.costType}`}</Text>
export default StoreItem

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 75,
		flexDirection:'row',
		padding: 5,
		margin: 10,
		borderRadius: 6,
		backgroundColor: '#A9CEF4',
		alignItems:'center',
		borderWidth: 1,
		borderRadius: 0,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 1,
		shadowRadius: 2,
		elevation: 0.8,
	},
	textContaienr:{
		flex:1,
		padding: 5
	},
	descText: {
		fontSize:17,
		fontFamily: 'Roboto'
	},
	descHeadline: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	button: {
		flex:1,
		margin:10,
		marginLeft: 15,
		marginBottom: 6,
		justifyContent: 'center',
		alignItems:'center',
		borderRadius:5,
		shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 }, 
	},
	buttonText: {
		color: 'white',
		fontSize: 17
	}
})






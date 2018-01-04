import React, {Component} from 'react'
import {View, Text, Dimensions,Picker, TouchableOpacity, FlatList, Image, StyleSheet, Modal, TouchableWithoutFeedback} from 'react-native'
import QuantityPicker from '../quantityPicker.js'
import Block from '../profile/block.js'
import {fToUpperCase} from 'boater/app/utils/utils'
const {width, height} = Dimensions.get('window')
class  StoreItemCreatorModal extends Component {
	constructor(props) {
	  super(props);
	  this.state = { 
			type:'', 
			forType: ''
		};
	}

	

	closeModal = () => {
		this.props.changeModalState(false)
		//service to talk to the network about this thing
		this.props.quantityChange({type: this.state.type, amount: this.state.initalAmount})
	}

	saveAndCloseModal = () => {
		this.props.quantityChange({type: this.state.type, amount: this.state.initalAmount - this.props.resources[this.state.type]})
		this.props.addItemToStore({costType: this.state.forType, cost: this.state.cost, item: this.state.type, amount: this.props.resources[this.state.type]})
		this.props.changeModalState(false)
	}

	changeValue = (newValue) => {
		console.log(newValue, this.state.initalAmount)
		if (newValue <= this.state.initalAmount && newValue >= 0) {
			this.props.quantityChange({type: this.state.type, amount: newValue})
		}
	}

	changeCost = (newCost) => {
		if (newCost >= 0) {
			this.setState({cost: newCost})
		}
	}

	onShow = () => {
		this.setState({
			type: this.props.creatorModalData.type,
			forType:this.props.creatorModalData.type,
			cost: '0',
			initalAmount: this.props.resources[this.props.creatorModalData.type]
		})
	}

	onForTypeClick = (type) => {
		this.setState({forType: type})
	}

	renderForSection = () => (
		<View style={{flex: 2, paddingTop:20, paddingBottom: 20}}>
			<View style={styles.exchangeListContainer}>
				<Text>{'For:'}</Text>
				<FlatList 
					horizontal 
					style={styles.resourceContainer}
					data={Object.keys(this.props.resources)}
					renderItem={
						({item})=> <Block 
							imageStyle={styles.exchangeELementImage} 
							name={fToUpperCase(item)} style={styles.block} 
							onPress={this.onForTypeClick}
							pic={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
						}
					keyExtractor={(item)=>item}
				/>
			</View>
			<View style={styles.topContainer}>
				<Text>{fToUpperCase(this.state.forType || '')}</Text>
				<QuantityPicker changeValue={this.changeCost} amount={this.state.cost}/>  
			</View>
		</View>
	)

	renderSellSection = () => (
		<View style={styles.section}>					
			<Text>{'Sell:'}</Text>
			<View style={styles.topContainer}> 
				<Text>{fToUpperCase(this.state.type || '')}</Text>
				<QuantityPicker changeValue={this.changeValue} amount={this.props.resources[this.state.type]}/>  
			</View>		
		</View>
	)

	renderVerifySection = () => (
		<View style={styles.bottomContainer}> 
	    	<TouchableOpacity style={styles.verificationContainer} onPress={this.closeModal}>  
		     	 <Text>{'Cancel'}</Text> 
     		</TouchableOpacity>
	   	    <TouchableOpacity style={styles.verificationContainer} onPress={this.saveAndCloseModal}> 
			     <Text>{'Add Item'}</Text> 
		    </TouchableOpacity> 
		</View>
	)

	render(){
		return(
			<Modal onRequestClose={()=>{}}visible={this.props.creatorModal} transparent onShow={this.onShow}>
				    <View style={styles.container}> 
						<View style={styles.editor}>
							{this.renderSellSection()}
							{this.renderForSection()}  
							{this.renderVerifySection()}
				 	    </View>
					</View>				
			</Modal> 
		) 
	}
}  
export default StoreItemCreatorModal

//HEIGHT/5
const styles = StyleSheet.create({
	editor: {
		height: height/1.7,
		backgroundColor: 'pink',
		padding: 6
	},
	container: {
		width: width, 
		height: height,
		justifyContent: 'center',
		backgroundColor: 'rgba(52, 52, 52, 0.5)',
	},
	bottomContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flex: 0.5
	},
	topContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
		justifyContent:'space-between',
		flex: 1
	},
	verificationContainer: {
		flexDirection: 'row',
		backgroundColor: 'green',
		width: 150,
		flex:1 ,
		margin: 2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	block: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin :2,
		borderRadius: 5,
		backgroundColor: 'grey',
		width:100
	},
	exchangeListContainer: {
		flex: 1.5,
		margin: 5
	},
	exchangeELementImage :{
		width: 25,
		height: 25
	},
	section: {
		flex: 1
	}
})
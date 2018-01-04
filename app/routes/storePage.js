import React, {Component} from 'react'
import { View, Text, StyleSheet , Dimensions, FlatList } from 'react-native'
//<storeProduct />
import {StoreItem} from '../components'
import {StoreItemCreatorModal_R, StoreItem_R} from 'boater/app/redux/components'
import Resource_R from 'boater/app/redux/components/resource_R'
//const StoreItemCreatorModal = require('boater/app/components/store-components/storeItemCreatorModal')
const resources = [{type: 'fire', amount: '1'}, {type: 'water', amount: '2'},{type: 'koala', amount: '3'}, {type: 'fridge', amount: '4'},{type: 'fire2', amount: '5'}]
class StorePage extends Component {

	renderResources = () =>{
		return resources.map((resource, i) => {
			return <Resource_R key={i} {...resource} />
		})
	}
	render() {
		return (
			<View style={styles.container}>
			<StoreItemCreatorModal_R />
			<View style={styles.resourceListContainer}>
				<FlatList 
					horizontal 
					style={styles.resourceContainer}
					data={Object.keys(this.props.resources)}
					renderItem={({item})=> <Resource_R type={item} amount={this.props.resources[item]} />}
					keyExtractor={(item)=>item}
				/>
			</View>	  
				<FlatList
	  				style={{flex:1}}
	  				data={this.props.storeList}
	  				renderItem={({item}) => <StoreItem_R {...item} owner={true}/>}
	  				keyExtractor={(item)=>Math.random()}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1 
	},
	resourceListContainer: {
		flex: 0.275,
		backgroundColor: '#ff00ff'
	}
})

export default StorePage
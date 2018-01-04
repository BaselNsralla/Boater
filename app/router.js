import {StackNavigator ,TabNavigator} from 'react-navigation'
import { BoatPage, ProfilePage } from './routes'
import {StorePage_R} from 'boater/app/redux/components'
import React from 'react'
import {StyleSheet, Image, Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window')
const standardStyles = StyleSheet.create({
	container: {
		width:width,
		height: height-49 ,
		alignItems: 'center',
		flexDirection: 'column'
	},
	tab: {
		backgroundColor: '#69b6ff',
	},
	labelStyle: {
		color: 'white',
		fontSize: 15,
		fontWeight: 'bold'
	},
	icon: {

		margin: 5
	},
	homeStackNavigator: {
		backgroundColor: '#61b4f4'
	}
})

const HomeStack = StackNavigator({
	Boater: {
		screen: (props) => <BoatPage {...props} standardStyles={standardStyles}/> ,
		navigationOptions: ({navigation}) => ({
      		title: `Boater`,
      		headerStyle: standardStyles.homeStackNavigator
    	}),
	},
	Store: {
		screen: StorePage_R,
		navigationOptions: ({navigation}) => ({
      		title: `Store`,
      		headerStyle: standardStyles.homeStackNavigator
    	}),
	}
})

const MainTabs = TabNavigator({
	Home: {
		screen: HomeStack,
		navigationOptions: {
		   tabBarLabel: 'Boat',	
		  tabBarIcon: ({ tintColor }) => (
      		<Image
       		  source={require('boater/app/assets/interneta.png')}
      		  style={[standardStyles.icon, {tintColor: tintColor}]}
      		/>
    	)},
	},
	Profile: {
		screen: (props) => <ProfilePage {...props} standardStyles={standardStyles}/> ,
		navigationOptions: {
		  tabBarIcon: ({ tintColor }) => (
      		<Image
       		  source={require('boater/app/assets/diamond.png')}
      		  style={[standardStyles.icon, {tintColor: tintColor}]}
      		/>
    	)},
	}
}, {
	tabBarOptions: {
		style: standardStyles.tab,
		labelStyle: standardStyles.labelStyle,
		activeTintColor: 'white'
	},
	animationEnabled: true,
})



export default MainTabs
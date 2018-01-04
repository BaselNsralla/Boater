import React, {Component} from 'react'
import {View, Text, Image,TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import Controls from './controls'
const {width, height} = Dimensions.get('window')
class Village extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render() {
		return (
			  <View style={styles.container}> 
			  	<View style={styles.header}> 
			  		<Controls {...this.props}/>
			  	</View> 
			  	<View style={styles.bottomSectionContainer}> 
			  	    <View style={styles.hostedView}>
			  			{this.props.hosting ? <VisitorOverView /> : <Text>Currently no visitor</Text>} 
			  	    </View>
			  	    <View style={styles.boatView}>
				  		 <TouchableOpacity style={styles.boatContainer}>
							<Image style={styles.boatpic} source={require('boater/app/assets/sailboat.png')} />
				  	 	</TouchableOpacity>
				    </View>
			  	</View> 
			  </View> 
	
		)
	}
}
const styles = StyleSheet.create({
	boatpic :{
		flex : 0.7,
		resizeMode : 'contain'
	},
	container: {
		width: width,
		flex: 1,
		//justifyContent: 'center'
	},
	boatContainer: {
		flex : 4 ,
	},
	bottomSectionContainer: {
		flex : 7,
		justifyContent: 'center',
		alignItems: 'center'
	},
	header: {
		flex : 1,
		backgroundColor :'white'
	},
	hostedView: {
		flex: 1,
	},
	boatView: {
		flex : 3
	}
})

Village.defaultProps = {
  hosting : false,
  hostingProfile: 'HASH'
}

export default Village
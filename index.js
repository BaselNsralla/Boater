import { AppRegistry } from 'react-native';
import MainTabs from './app/router.js'
import {Provider} from 'react-redux'
import store from './app/redux/store.js'
import React from 'react'

AppRegistry.registerComponent('boater', () => () => {

	return (
		<Provider store={store}>
			<MainTabs /> 
		</Provider>
	)

});

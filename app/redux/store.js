import {createStore} from 'redux'
import combinedReducers from './reducers/reducers.js'

const defaultState = {
	resources: {
		fire: 56,
		water: 321,
		wood: 45,
		stone: 455
	},
	creatorModal: false,
	creatorModalData: {
		type:''
	},
	storeList : [{item: 'IRON', cost: 123, costType:'WOOD', amount: 123}]
}
const store = createStore(combinedReducers, defaultState)
export default store

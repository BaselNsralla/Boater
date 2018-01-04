import {combineReducers} from 'redux'

const resources = (state = {}, action) => {
	if(action.type === 'RESOURCE_QUANTITY_CHANGE' ) {
		let newState = Object.assign({}, state)
		newState[action.data.type] = action.data.amount
		console.log(newState)
		return newState
	}
	return state
}

const creatorModal = (state = null, action) => {
	if (action.type === 'MODAL_STATE') {
		return action.data
	}
	return state
}

const creatorModalData = (state = {}, action) => {
	if (action.type === 'CREATOR_MODAL_TYPE_CHANGE') {
		let newState = Object.assign({}, state)
		newState.type = action.data
		return newState
	}
	return state
}

const storeList = (state = [], action) => {
	if (action.type === 'ADD_NEW_STORE_ITEM') {
		state.push(action.data)
		return state
	}
	return state
}

const combinedReducers = combineReducers({resources, creatorModalData, creatorModal, storeList}) 

export default combinedReducers

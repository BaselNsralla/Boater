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
	switch (action.type) {
		case 'ADD_NEW_STORE_ITEM':
			return addStoreItem(state, action.data)
		break;
		case 'REMOVE_ITEM_FROM_STORE':
			return removeStoreItem(state, action.data)
		break;
		default:
			return state
			break;
	}
}

const addStoreItem = (state, data) => {
	state.push(data)
	return state
}

const removeStoreItem = (state, data) => {
	const filtered = state.filter((item)=>{
		return item.id != data.id
	})
	return filtered
}


const combinedReducers = combineReducers({resources, creatorModalData, creatorModal, storeList}) 

export default combinedReducers

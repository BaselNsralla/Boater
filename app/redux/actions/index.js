function changeModalState(bool) {
	return {
		type: 'MODAL_STATE',
		data: bool	
	}
}

function changeResourceQuantity(obj) {
	return {
		type: 'RESOURCE_QUANTITY_CHANGE',
		data: obj
	}
}

function changeCreatorModalType(type){
	return {
		type: 'CREATOR_MODAL_TYPE_CHANGE',
		data: type
	}
}

function addItemToStore(itemObject) {
	return {
		type: 'ADD_NEW_STORE_ITEM',
		data: itemObject
	}
}

function removeItemFromStore(itemObject) {
	return {
		type: 'REMOVE_ITEM_FROM_STORE',
		data: itemObject
	}
}


export { changeModalState, changeResourceQuantity, changeCreatorModalType, addItemToStore, removeItemFromStore }
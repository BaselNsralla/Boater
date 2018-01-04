import StoreItemCreatorModal from 'boater/app/components/store/storeItemCreatorModal.js'
import {changeModalState, changeResourceQuantity, addItemToStore} from '../actions'
import {connect} from 'react-redux'

function mapStateToProps (state) {
	return {
		creatorModal: state.creatorModal,
		creatorModalData: state.creatorModalData,
		resources: state.resources
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeModalState: (bool) => {
			dispatch(changeModalState(bool))
		},
		quantityChange: (obj) => {
			dispatch(changeResourceQuantity(obj))
		},
		addItemToStore : (obj) => {
			dispatch(addItemToStore(obj))
		} 
	}
}

const StoreItemCreatorModal_R = connect(mapStateToProps, mapDispatchToProps)(StoreItemCreatorModal)
export default StoreItemCreatorModal_R

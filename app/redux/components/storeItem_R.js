import StoreItem from 'boater/app/components/store/storeItem.js'
import {removeItemFromStore} from '../actions'
import {connect} from 'react-redux'

function mapDispatchToProps(dispatch) {
	return {
		removeItemFromStore : (obj) => {
			dispatch(removeItemFromStore(obj))
		} 
	}
}

const StoreItem_R = connect(null, mapDispatchToProps)(StoreItem)
export default StoreItem_R
import StorePage from '../../routes/storePage.js'
import {changeModalState} from '../actions'
import {connect} from 'react-redux'

function mapStateToProps (state) {
	return {
		resources: state.resources,
		creatorModal: state.creatorModal,
		creatorModalData: state.creatorModalData,
		storeList: state.storeList
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeModalState: (bool) => {
			dispatch(changeModalState(bool))
		}
	}
}

const StorePage_R = connect(mapStateToProps, mapDispatchToProps)(StorePage)
export default StorePage_R

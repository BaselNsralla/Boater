import Resource from 'boater/app/components/store/resource.js'
import {changeModalState, changeCreatorModalType} from '../actions'
import {connect} from 'react-redux'

function mapStateToProps (state) {
	return {
		creatorModalData: state.creatorModalData
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeModalState: (bool) => {
			dispatch(changeModalState(bool))
		},
		changeCreatorModalType: (type) => {
			dispatch(changeCreatorModalType(type))
		}
	}
}

const Resource_R = connect(mapStateToProps, mapDispatchToProps)(Resource)
export default Resource_R

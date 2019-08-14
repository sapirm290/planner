import AppVisual from './AppVisual';
import { connect } from 'react-redux'
import { loadItems } from '../../actions/itemsActions'


const mapStateToProps = (state) => {
    return { shownItems: state.items }
}
const mapDispatchToProps = dispatch => {
    return {
        loadItems: () => {
            dispatch(loadItems)
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppVisual)

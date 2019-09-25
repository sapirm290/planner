import AppVisual from './AppVisual';
import { connect } from 'react-redux'
import { getTodos } from '../../actions/items'


const mapStateToProps = (state) => {
    return { items: state.items }
}
// const mapDispatchToProps = dispatch => ({ getTodos: dispatch(getTodos) })

export default connect(
    mapStateToProps,
    { getTodos }
)(AppVisual)

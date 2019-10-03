import Dashboard from './Dashboard';
import { connect } from 'react-redux'
import { getTodos } from '../../actions/items'


const mapStateToProps = (state) => {

    return { items: state.items.filter(item => (item.title.includes(state.search) || item.description.includes(state.search))) }
}

export default connect(
    mapStateToProps,
    { getTodos }
)(Dashboard)

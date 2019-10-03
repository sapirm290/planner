import { connect } from 'react-redux'
import Item from './Item'
import { deleteTodo } from '../../actions/items'


const mapStateToProps = (state, props) => {
    return props.item
}

const ItemLogic = connect(
    mapStateToProps,
    { deleteTodo }
)(Item)


export default ItemLogic

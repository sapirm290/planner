import { connect } from 'react-redux'
import ItemCreationPanel from './ItemCreationPanel'

const ADD = "ADD"
const addItemAction = (itemAsObject) => {
    return { item: itemAsObject, type: ADD }
}
const mapDispatchToProps = dispatch => {
    return {
        addItem: (itemAsObject) => {
            dispatch(addItemAction(itemAsObject))
        }
    }
}

const ItemCreationContainer = connect(
    null,
    mapDispatchToProps
)(ItemCreationPanel)

export default ItemCreationContainer
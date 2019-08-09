import { connect } from 'react-redux'
import AddItem from './AddItem'

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

const AddItemLogic = connect(
    null,
    mapDispatchToProps
)(AddItem)

export default AddItemLogic
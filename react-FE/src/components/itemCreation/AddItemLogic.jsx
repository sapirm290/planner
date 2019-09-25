import { connect } from 'react-redux'
import AddItem from './AddItem'
import { addTodo } from '../../actions/items'
// const addItemAction = (itemAsObject) => {
//     return { item: itemAsObject, type: ADD }
// }
const mapDispatchToProps = dispatch => {
    return {
        addItem: (itemAsObject) => {
            dispatch(() => addTodo(dispatch, itemAsObject))
        }
    }
}

const AddItemLogic = connect(
    null,
    mapDispatchToProps
)(AddItem)

export default AddItemLogic
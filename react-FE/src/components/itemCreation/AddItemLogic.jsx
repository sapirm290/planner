import { connect } from 'react-redux'
import AddItem from './AddItem'
import { addItem } from '../../actions/itemsActions'
// const addItemAction = (itemAsObject) => {
//     return { item: itemAsObject, type: ADD }
// }
const mapDispatchToProps = dispatch => {
    return {
        addItem: (itemAsObject) => {
            dispatch(() => addItem(dispatch, itemAsObject))
        }
    }
}

const AddItemLogic = connect(
    null,
    mapDispatchToProps
)(AddItem)

export default AddItemLogic
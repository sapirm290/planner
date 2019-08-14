import { connect } from 'react-redux'
import Item from './Item'
import { deleteItem } from '../../actions/itemsActions'

// const REMOVE = "REMOVE"
// const UPDATEITEM = "UPDATEITEM"
// const SETDONE = "SETDONE"
// const SETSTARRED = "SETSTARRED"



// const initialState = {
//     items:
//         [
//         ]
// }
// const removeItemAction = (index) => {
//     return {
//         type: REMOVE,
//         index: index
//     }
// }
// const setItemDoneAction = (item) => {
//     return {
//         type: UPDATEITEM,
//         item: {...item, title: 'changed'}
//     }
// }
// const setItemStarredAction = (index) => {
//     return {
//         type: SETSTARRED,
//         index: index
//     }
// }

const mapStateToProps = (state, props) => {
    return props.item
}
const mapDispatchToProps = dispatch => {
    return {
        deleteItem: (itemId) => {
            dispatch(() => deleteItem(dispatch, itemId))
        }
    }
}
const ItemLogic = connect(
    mapStateToProps,
    mapDispatchToProps
)(Item)


export default ItemLogic

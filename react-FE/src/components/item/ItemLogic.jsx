import { connect } from 'react-redux'
import Item from './Item'

const REMOVE = "REMOVE"
const SETDONE = "SETDONE"
const SETSTARRED = "SETSTARRED"
const removeItemAction = (index) => {
    return {
        type: REMOVE,
        index: index
    }
}
const setItemDoneAction = (index) => {
    return {
        type: SETDONE,
        index: index
    }
}
const setItemStarredAction = (index) => {
    return {
        type: SETSTARRED,
        index: index
    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeItem: (index) => {

            dispatch(removeItemAction(index))
        },
        setItemDone: (index) => {

            dispatch(setItemDoneAction(index))
        },
        setItemStarred: (index) => {

            dispatch(setItemStarredAction(index))
        }
    }
}

const mapStateToProps = (state, props) => {
    let taskObject = state.items.find(element => element.id === props.id)
    console.log(taskObject)
    return taskObject
}

const ItemLogic = connect(
    mapStateToProps,
    mapDispatchToProps
)(Item)


export default ItemLogic

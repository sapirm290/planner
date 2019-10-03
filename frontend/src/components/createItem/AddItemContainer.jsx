import { connect } from 'react-redux'
import AddItem from './AddItem'
import { addTodo } from '../../actions/items'

const AddItemLogic = connect(
    null,
    { addTodo }
)(AddItem)

export default AddItemLogic
import { connect } from 'react-redux'
import Header from './Header'

const SAVE = "SAVE"
const LOAD = "LOAD"

const mapStateToProps = (state) => {
  return {appStatus: state.appStatus}
}
const mapDispatchToProps = dispatch => {
  return {
      saveItems: () => {
          dispatch({ type: SAVE })
      },
      loadItems: () => {
          dispatch({ type: LOAD })
      }
  }
}
const ConnectedHeader = connect(
  mapDispatchToProps,
  mapStateToProps
)(Header)

export default ConnectedHeader

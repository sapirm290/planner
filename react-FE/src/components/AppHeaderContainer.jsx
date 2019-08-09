import { connect } from 'react-redux'
import AppHeader from './AppHeader'

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
const ConnectedAppHeader = connect(
  mapDispatchToProps,
  mapStateToProps
)(AppHeader)

export default ConnectedAppHeader

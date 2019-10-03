import { connect } from 'react-redux'
import Header from './Header'


const mapStateToProps = (state) => {
  return { appStatus: state.appStatus }
}
const ConnectedHeader = connect(
  null,
  mapStateToProps
)(Header)

export default ConnectedHeader

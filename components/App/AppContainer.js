import { connect } from 'react-redux'
import App from './App';

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.currentPage
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

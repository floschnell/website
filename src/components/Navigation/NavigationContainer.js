import { connect } from 'react-redux'
import { goToPage } from '../../actions/index'
import Navigation from './Navigation';

const mapStateToProps = (state, ownProps) => {
  return {
    language: state.language,
    currentPage: state.currentPage
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);


    
import { connect } from 'react-redux';
import { goToPage } from '../../actions/index';
import NavigationItem from './NavigationItem';

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.currentPage === ownProps.target,
    language: state.language
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
        dispatch(goToPage(ownProps.target));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationItem);


    
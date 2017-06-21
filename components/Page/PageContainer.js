import { connect } from 'react-redux'
import Page from './Page';

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: state.currentPage,
    language: state.language,
    content: state.content
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

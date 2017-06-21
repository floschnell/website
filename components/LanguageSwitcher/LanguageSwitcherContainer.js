import { connect } from 'react-redux'
import LanguageSwitcher from './LanguageSwitcher';
import { setLanguage } from '../../actions/index';

const mapStateToProps = (state, ownProps) => {
  return {
    currentLanguage: state.language
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      switchLanguage: newLanguage => {
          dispatch(setLanguage(newLanguage));
      }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSwitcher);

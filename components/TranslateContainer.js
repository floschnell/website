import { connect } from 'react-redux';
import DICTIONARY from '../content/dictionary';

const mapStateToProps = (state, ownProps) => {
  return {
    translate: (entry, language = null) => {
      let key = entry;
      const toLanguage = language || state.language;
      if (typeof entry === 'object') {
        key = Object.keys(DICTIONARY).find(key => DICTIONARY[key] === entry);
      }

      if (DICTIONARY[key] && DICTIONARY[key][toLanguage]) {
        return DICTIONARY[key][toLanguage];
      } else {
        console.warn(`Could not find translation of ${key} into ${toLanguage}`);
        return `[no translation of ${key} to ${toLanguage}]`;
      }
    }
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export { DICTIONARY as DICTIONARY };

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

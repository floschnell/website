import React from 'react';
import PropTypes from 'prop-types';
import LanguageSwitcherStyles from './LanguageSwitcher.styl';
import TranslateContainer from '../TranslateContainer';

import LANGUAGES from '../../content/languages';
import DICTIONARY from '../../content/dictionary'

const flagIcons = {
    [LANGUAGES.DE]: require('../../assets/embedded/languages/DE.png'),
    [LANGUAGES.EN]: require('../../assets/embedded/languages/EN.png'),
    [LANGUAGES.FR]: require('../../assets/embedded/languages/FR.png')
};

const LanguageSwitcher = ({currentLanguage, switchLanguage, translate}) => {
    const languageItems = Object.keys(LANGUAGES).map(language => 
        <div key={language}
            className={language === currentLanguage ? LanguageSwitcherStyles.activated : LanguageSwitcherStyles.deactivated}
            onClick={() => switchLanguage(language)}
        >
            {flagIcons[language] ? <img className={LanguageSwitcherStyles.flag} src={flagIcons[language]} /> : null}{translate(DICTIONARY.CHOOSE_LANG_BTN, language)}
        </div>);

    return <div className={LanguageSwitcherStyles.container}>
        <div className={LanguageSwitcherStyles.title}>{translate(DICTIONARY.LANGUAGES)}</div>
        {languageItems}
    </div>
};

export default TranslateContainer(LanguageSwitcher);
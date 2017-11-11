import React, { PropTypes } from 'react'
import RightColumnStyles from './RightColumn.styl';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcherContainer';
import Social from '../Social/Social';

const RightColumn = () => 
    <div className={RightColumnStyles.rightColumn}>
        <LanguageSwitcher />
        <Social />
    </div>;

export default RightColumn;

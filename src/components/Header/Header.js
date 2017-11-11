import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyles from './Header.styl';
import MeImage from '../../assets/embedded/me.png';
import TranslateContainer, {DICTIONARY} from '../TranslateContainer';

const Header = ({translate}) => <div className={HeaderStyles.container}>
        <div className={HeaderStyles.dotContainer}>
            <img src={MeImage} className={HeaderStyles.dot} />
            <div className={HeaderStyles.dotShadow}></div>
        </div>
        <div className={HeaderStyles.head}>
            <div className={HeaderStyles.title}>Florian Schnell</div>
            <div className={HeaderStyles.subtitle}>{translate(DICTIONARY.SOFTWARE_ENGINEER)}</div>
        </div>
    </div>;

export default TranslateContainer(Header);
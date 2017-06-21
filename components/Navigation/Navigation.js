import React, { PropTypes } from 'react'
import NavigationItem from '../NavigationItem/NavigationItemContainer';
import styles from './Navigation.styl';
import SITE from '../../content/site';
import TranslateContainer from '../TranslateContainer';

const Navigation = ({language, translate, currentPage}) => {
    const navigationItems = Object.keys(SITE[language]).map(pageName =>
        <NavigationItem
            key={pageName}
            name={pageName}
            page={SITE[language][pageName]}
            target={pageName}
            parent={null}
            navigationItemType={NavigationItem} />
    );

    return <div className={styles.navigationBar}>
        {navigationItems}
    </div>;
}

export default Navigation;

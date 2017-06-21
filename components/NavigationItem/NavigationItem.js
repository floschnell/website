import React from 'react';
import PropTypes from 'prop-types';
import NavigationItemStyles from './NavigationItem.styl';
import TranslateContainer from '../TranslateContainer';

class NavigationItem extends React.Component {

    render() {
        const keyPrefix = this.props.parent ? `${this.props.language}-${this.props.parent}` : this.props.language;
        const hasChildren = Object.keys(this.props.page).length > 0;
        const isChild = this.props.parent !== null;

        const children = Object.keys(this.props.page).map(subPageName =>
            <this.props.navigationItemType
                key={subPageName}
                page={this.props.page[subPageName]}
                name={subPageName}
                target={subPageName}
                parent={this.props.name}
                navigationItemType={this.props.navigationItemType}
            />
        );

        if (hasChildren) {
            return <div className={`${NavigationItemStyles.item} ${NavigationItemStyles.parent}`}>
                <div className={NavigationItemStyles.title}>
                    {this.props.translate(this.props.name)}
                </div>
                <div className={NavigationItemStyles.children}>
                    {children}
                </div>
            </div>;
        } else {
            const classList = [
                NavigationItemStyles.item,
                isChild ? NavigationItemStyles.child : null,
                this.props.active ? NavigationItemStyles.itemSelected : null
            ].filter(className => className !== null);

            return <div className={classList.join(' ')} onClick={this.props.onClick} >
                {this.props.translate(this.props.name)}
                <div className={NavigationItemStyles.dotContainer}>
                    <div className={NavigationItemStyles.dot}></div>
                    <div className={NavigationItemStyles.dotShadow}></div>
                </div>
            </div>;
        }
    }
};

export default TranslateContainer(NavigationItem);
import React, { PropTypes } from 'react'
import SocialStyles from './Social.styl';
import TranslateContainer, {DICTIONARY} from '../TranslateContainer';

const Social = ({language, translate}) => 
    <div className={SocialStyles.container}>
        <div className={SocialStyles.title}>{translate(DICTIONARY.CONTACT)}</div>
        <ul className={SocialStyles.list}>
            <li className={SocialStyles.item}>
                <a href="mailto://floschnell@gmail.com">
                    <i className="material-icons">email</i>E-Mail
                </a>
            </li>
            <li className={SocialStyles.item}>
                <a href="https://github.com/floschnell" target="_blank">
                    <i className="material-icons">account_circle</i>GitHub
                </a>
            </li>
            <li className={SocialStyles.item}>
                <a href="https://www.strava.com/athletes/20470328" target="_blank">
                    <i className="material-icons">directions_bike</i>Strava
                </a>
            </li>
            <li className={SocialStyles.item}>
                <a href="https://www.linkedin.com/in/florian-schnell-489451103" target="_blank">
                    <i className="material-icons">business</i>Linkedin
                </a>
            </li>
        </ul>
    </div>;

export default TranslateContainer(Social);

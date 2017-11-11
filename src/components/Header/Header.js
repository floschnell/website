import React from "react";
import PropTypes from "prop-types";
import HeaderStyles from "./Header.styl";
import MeImage from "../../assets/embedded/me.png";
import TranslateContainer, { DICTIONARY } from "../TranslateContainer";

const Header = ({ translate }) => (
  <div className={HeaderStyles.container}>
    <div className={HeaderStyles.profile}>
      <img src={MeImage} className={HeaderStyles.photo} />
    </div>
    <div className={HeaderStyles.title}>
      <div className={HeaderStyles.name}>Florian Schnell</div>
      <div className={HeaderStyles.job}>Full-Stack Sofwareentwickler</div>
    </div>
  </div>
);

export default TranslateContainer(Header);

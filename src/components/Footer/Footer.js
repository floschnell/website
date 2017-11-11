import React from "react";
import PropTypes from "prop-types";
import FooterStyles from "./Footer.styl";
import MeImage from "../../assets/embedded/me.png";
import TranslateContainer, { DICTIONARY } from "../TranslateContainer";

const Footer = ({ translate }) => (
  <div className={FooterStyles.container}>
    &copy; 2017 - www.floschnell.de<br />
    Created with{" "}
    <a target="_blank" href="https://www.reactjs.org">
      react
    </a>{" "}
    and{" "}
    <a target="_blank" href="https://webpack.github.io">
      webpack
    </a>.
  </div>
);

export default TranslateContainer(Footer);

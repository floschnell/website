import React from "react";
import Navigation from "../Navigation/NavigationContainer";
import AppStyles from "./App.styl";
import Page from "../Page/PageContainer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RightColumn from "../RightColumn/RightColumn";

const renderPage = page => {
  const pageToRender = pageMapping[page];
  if (typeof pageToRender === "undefined") {
    return <AboutMePage />;
  }
  return pageToRender;
};

const App = ({ currentPage }) => (
  <div className={AppStyles.container}>
    <div className={AppStyles.left}>
      <Navigation />
    </div>
    <div className={AppStyles.main}>
      <Header />
      <Page />
      <Footer />
    </div>
    <div className={AppStyles.right}>
      <RightColumn />
    </div>
  </div>
);

export default App;

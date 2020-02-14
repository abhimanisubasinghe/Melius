/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/welcome/Navbars/IndexNavbar.js";
import IndexHeader from "components/welcome/Headers/IndexHeader.js";
import DemoFooter from "components/welcome/Footers/DemoFooter.js";

// index sections
import SectionButtons from "pages/welcome/index-sections/SectionButtons.js";
import SectionNavbars from "pages/welcome/index-sections/SectionNavbars.js";
import SectionNavigation from "pages/welcome/index-sections/SectionNavigation.js";
import SectionProgress from "pages/welcome/index-sections/SectionProgress.js";
import SectionNotifications from "pages/welcome/index-sections/SectionNotifications.js";
import SectionTypography from "pages/welcome/index-sections/SectionTypography.js";
import SectionJavaScript from "pages/welcome/index-sections/SectionJavaScript.js";
import SectionCarousel from "pages/welcome/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "pages/welcome/index-sections/SectionNucleoIcons.js";
import SectionDark from "pages/welcome/index-sections/SectionDark.js";
import SectionLogin from "pages/welcome/index-sections/SectionLogin.js";
import SectionExamples from "pages/welcome/index-sections/SectionExamples.js";
import SectionDownload from "pages/welcome/index-sections/SectionDownload.js";
import {BrowserRouter as Router,Route} from 'react-router-dom';

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  
  return (
    <div>
    <Router>
  
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
       {/* <SectionButtons />
        <SectionNavbars />
        <SectionNavigation />
        <SectionProgress />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavaScript />
        <SectionCarousel />
       <SectionNucleoIcons />*/}
        <SectionDark />
        <Route path="/index/pages/welcome" component={SectionLogin}/>
        <SectionLogin />
        <SectionExamples />}
        {/*<SectionDownload />*/}
        <DemoFooter />
      </div>
    
    </Router>
    </div>
  );
}

export default Index;

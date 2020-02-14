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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/welcome/img/login1.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h2 className="presentation-title">On Top Super Clean Center</h2>
              <div className="fog-low">
                <img alt="..." src={require("assets/welcome/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/welcome/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
            Drive Confident with  Ontop
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/welcome/img/clouds.png") + ")"
          }}
        />
        <h6 className="category category-absolute">
          Designed and coded by{" Melius"}
          
            <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/welcome/img/11207.jpg")}
            />
          
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;

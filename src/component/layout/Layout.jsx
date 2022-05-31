// SCSS
import "./layout.scss";

// REACT
import React from 'react';

// COMPONENT
import Footer from "./footer/Footer";

const Layout = ({children}) => {

  return (

    <>
    
        <main className="container">
          {children}
        </main>

      <Footer />

    </>

  );

};

export default Layout;

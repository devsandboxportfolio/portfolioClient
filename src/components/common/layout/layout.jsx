import React from 'react';
import NavBar from '../navBar/navBar';
import Footer  from '../footer/footer';

const Layout = (props) => {
  return (
    <>
      <div style={{display: 'flex'}}>
        <div>
          <NavBar />
        </div>
        <div>
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout
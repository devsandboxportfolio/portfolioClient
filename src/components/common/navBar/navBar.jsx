import React from 'react';

const NavBar = (props) => {
  return (
    <nav style={{border: '1px solid', padding: '10px'}}>
      <ul style={{padding: '20px'}}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/aboutUs">About Us</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/article">Articles</a>
        </li>
        <li>
          <a href="/project/list">Projects</a>
        </li>
        <li>
          <a href="/user">Users</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar
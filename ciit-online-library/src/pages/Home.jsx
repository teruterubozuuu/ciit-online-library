import React from 'react';
import './Home.css';
import librarybg from '../images/library-bg.png';
import ciitlib_logo from '../images/ciit-library-logo.png';

export default function Home() {
  return (
    <div className="home-parent-container">
      <div className="library-header-parent">
        <img src={librarybg} alt="library background" className="library-bg" />
        <div className="library-header-child">
          <img src={ciitlib_logo} alt="ciit library logo" className="ciit-library-logo" />
          <div className="search-bar-cont">
            <i className="bi bi-search"></i>
            <input type="text" className="search-bar" />
          </div>
        </div>
      </div>

      <div className='home-content-parent'>
        <h1>Featured Books</h1>
        <h1>Top Rated Books</h1>
      </div>
    </div>
  );
}

import React from "react";
import './smallNav.css';

const SmallNav = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-title">DIGI WALL</div>
        <div className="navbar-right">
          <div className="search-box">
            <input type="text" placeholder="  Search" />
            <button className="search-button">&#128269;</button>
          </div>
          <div className="bookmark">
          <button className="action-button">
          🔖
          </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default SmallNav;
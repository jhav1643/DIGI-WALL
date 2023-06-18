import React, { useState } from 'react';
import './forNew.css';
import MyPost from '../../../myPost/myPost';
import {Link} from 'react-router-dom';

const Modal = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [nav, setNav] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.textContent);
  };

  const handleSubmit = ()=>{
    setNav(true);
  }

  return (
    <div className="newBackground">
      <div className="newContent">
        <div id="board">
          Let's make Your Board
        </div>
        <h4 className='name'>Board Name</h4>
        <div className='boardName'>
          <input type="text" placeholder=" Enter Name" />
        </div>

        <h4 className='name'>
          Choose your Topic
        </h4>

        <div className="dropdown">
          <button className="dropbtn">{selectedOption || ''}</button>
          <div className="dropdown-content">
            <div onClick={handleDropdownChange}>Environment</div>
            <div onClick={handleDropdownChange}>Health</div>
            <div onClick={handleDropdownChange}>Science</div>
          </div>
        </div>

        <br />
        <span className="bt">
        <Link to='/post' >
          <button onClick={handleSubmit} className='btn' >Submit {nav && <Link to ='/post'><MyPost/></Link>}</button>
          </Link>
        </span>

        <span className="bt" style={{marginLeft:'65px'}}>
          <button onClick={onClose} className='btn'>Clear</button>
        </span>
      </div>
    </div>
  );
};

export default Modal;



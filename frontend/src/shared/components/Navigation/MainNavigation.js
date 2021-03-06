import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = props => {
 
  return (
    <React.Fragment>

      <MainHeader>
  
        <h1 className="main-navigation__title">
                Phystech Labs Private Limited Task
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>

      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;

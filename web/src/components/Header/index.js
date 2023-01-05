/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Header.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 4th January 2023
 */

import React from "react";
import Logo from '../../assets/images/logo.svg';
import './styles.css';

function Header( ) {
    return(
        <img
            id='header'
            draggable={false}
            src={Logo}
            alt="_blanck" />
    );
  }

  export default Header;
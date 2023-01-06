/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file index.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 4th January 2023
 */

import React from 'react';
import './styles.css';

function DevItem({dev}){
    return(
        <li className='dev-item'>
        <header>

            <img src={dev.avatar_url}  alt={dev.name}/>
            <div className="user-info">

                <strong> {dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
            </div>
        </header>
    <p>{dev.bio}</p>
    <a href={`https://github.com/${dev.github_username}`}>Acceder al perfil de github</a>
    </li>
    );
}

export default DevItem
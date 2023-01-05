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

import React, { useEffect, useState } from 'react';

function DevForm({onSubmit}){

    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {latitude, longitude}= position.coords

                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err)
            },
            {
                timeout: 30000
            }
            )
    }, []);

    async function handleSubmit(e){

        e.preventDefault();

       await onSubmit({
            github_username,
            techs,
            latitude,
            longitude});


            setGithubUsername('')
            setTechs('')
    }

    return(
        <form onSubmit={handleSubmit}>

        <div className="input-block">
          <label htmlFor=''>Usuario de Github</label>
          <input
            name='github_username'
            id='username_github'
            required
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}/>
        </div>

        <div className="input-block">
          <label htmlFor=''>Tecnologias</label>
          <input
            name='techs'
            id='techs'
            required
            value={techs}
            onChange={e => setTechs(e.target.value)}/>
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor=''>Latitud</label>
            <input
                type="number"
                name='latitude'
                id='latitude'
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}/>
          </div>

          <div className="input-block">
            <label htmlFor=''>Longitud</label>
            <input
                type="number"
                name='longitude'
                id='longitude'
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}/>
          </div>

        </div>

        <button type='submit'>Enviar</button>

      </form>
    );
}

export default DevForm
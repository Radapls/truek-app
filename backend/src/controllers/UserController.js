/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file UserController.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 4th January 2023
 */

const axios = require('axios');
const User = require('../models/user');
const parseStringAsArray = require('../utils/parseStringAsArray')
const {findConnections, sendMessage} = require('../websocket')

// index, show, store, update, destroy

module.exports = {
    async index(request, response) {
         const users  = await User.find();

         return response.json(users)
    },

    async store(request, response) {
        const {github_username, techs, latitude, longitude } =  request.body;

        let user = await User.findOne({github_username});

        if (!user) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio} = apiResponse.data

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude ]
            };

            user = await User.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })

            // Filter the connections in a 10km radio
            // Almost one of the techs filtered

            const sendSocketMessageTo = findConnections(
                {latitude,longitude},
                techsArray
                )

                sendMessage(sendSocketMessageTo, 'new-user', user)

        }

        return response.json(user);
    }
}

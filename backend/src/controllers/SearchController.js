/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file SearchController.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 4th January 2023
 */

const User = require('../models/user')
const parseStringAsArray = require('../utils/parseStringAsArray')


module.exports = {
    async index(request, response){
        // Search devs in a 10km raio and filter by technologies
        const { latitude, longitude, techs} = request.query;

        const techsArray = parseStringAsArray(techs);

        const users = await User.find({
            techs: {
                $in: techsArray,
            },
            location:{
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000,
                }
            }
        })

        return response.json({users})
    }
}
const User = require('../models/user')
const parseStringAsArray = require('../utils/parsestringAsArray')


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
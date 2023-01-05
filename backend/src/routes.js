const {Router} = require('express');
const UserController = require('./controllers/UserController');
const SearchController = require('./controllers/SearchController')

const routes = Router();

routes.get('/users', UserController.index)
routes.get('/search', SearchController.index)
routes.post('/users', UserController.store)
// routes.delete('/users', DeleteControler.index)
// routes.put('/users', EditController.index)

module.exports = routes
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
 * @date Tuesday, 3rd January 2023
 */

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebsocket} = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server)

mongoose.set("strictQuery", true);

mongoose.connect('mongodb+srv://example:example@cluster0.esijuul.mongodb.net/?retryWrites=true&w=majority')

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(8888);


// Http methods GET, POST, PUT, DELETE

// Parameters type into Express
// 90% with GET - Query Params: request.query (Filter, organize, pagination, ...)

// app.get('/users', (request, response) => {
//     console.log(request.query)
//     return response.json({message: 'Hello Parceiro'});
// })

// Route Params: request.params (Identify a resourse on alteration o deletation)

// app.delete('/users/:id', (request, response) => {
//     console.log(request.params)
//     return response.json({message: 'Hello Parceiro'});
// })

// Body: (Data for creation o alteration in a service)
// app.post('/users', (request, response) => {
//     console.log(request.body)
//     return response.json({message: 'Hello Parceiro'});
// })

// MongoDB (No relational)
/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file socket.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Friday, 6th January 2023
 */

import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.135:8888', {
    autoConnect: false
})

function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-user', subscribeFunction)
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    }

    socket.connect();
}

function disconnect() {
    if(socket.connected){
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs
};

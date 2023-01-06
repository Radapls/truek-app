/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file api.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Thursday, 5th January 2023
 */

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.135:8888'
})

export default api
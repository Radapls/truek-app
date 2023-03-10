/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Profile.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Thursday, 5th January 2023
 */

import React from 'react';
import { WebView } from 'react-native-webview';

function Profile({navigation}){
    const githubUsername = navigation.getParam('github_username')
    return <WebView style={{flex: 1}}  source={{uri: `https://github.com/${githubUsername}`}}/>
}

export default Profile
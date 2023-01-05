/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file routes.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Thursday, 5th January 2023
 */

import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: <Image style={{ width: 100, height:40, resizeMode:'cover' }} source={require('../assets/logo.png')}/>,
                headerTitleAlign: 'center'
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Profile Github',
                headerTitleAlign: 'center'
            }
        },
     }, {
        defaultNavigationOptions: {
            headerTintColor: '#690375',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#FCAB10',
            }
        }
     }
    )
);

export default Routes
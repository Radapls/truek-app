/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Main.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Thursday, 5th January 2023
 */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';

function Main({navigation}){
    // const [currentRegion, setCurrentRegion] = useState(null)

    // useEffect(() => {
    //     async function loadInitialPosition(){
    //         const {granted} = await requestForegroundPermissionsAsync();

    //         if (granted) {
    //             const {coords} = await getCurrentPositionAsync({
    //                 enableHighAccuracy: true
    //             });

    //             const { latitude, longitude} = coords;

    //             setCurrentRegion({
    //                 latitude,
    //                 longitude
    //             })
    //         }
    //     }

    //     loadInitialPosition();
    // }, []);

    // if(!currentRegion){
    //     return null;
    // }

    return <MapView  style={style.map}>
        <Marker coordinate={{ latitude: -27.2, longitude: -49.6}}>
            <Image style={style.avatar} source={{uri: 'https://avatars.githubusercontent.com/u/63562282?v=4'}}/>

            <Callout onPress={() => {
                 navigation.navigate('Profile', {github_username: 'Radapls'})
            }}>
                <View style={style.callout}></View>
                    <Text style={style.name} >Juan Felipe Rada</Text>
                    <Text style={style.bio} >Politólogo* Aprendiendo a programar una linea a la vez</Text>
                    <Text style={style.techs} >Angular, TypeScript</Text>
            </Callout>
        </Marker>
    </MapView>
}

const style = StyleSheet.create({
    map: {
        flex: 1
    },

    avatar:{
        width: 54,
        height: 54,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: '#FFF',
        objectFit: 'cover'
    },

    callout: {
        width: 200,
        height: 10,
        borderRadius: 10
    },

    name: {
        fontWeight:'bold',
        fontSize: 16
    },

    bio: {
        color: '#666',
        marginTop: 5
    },

    techs: {
        marginTop: 5
    }


})
export default Main;
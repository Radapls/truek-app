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
import { MaterialIcons } from '@expo/vector-icons';
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import api from '../services/api';

function Main({navigation}){
    const [users, setUsers] = useState([]);
    const [currentRegion, setCurrentRegion] = useState(null);
    const [techs, setTechs] = useState('')

    useEffect(() => {
        async function loadInitialPosition(){
            const {granted} = await requestForegroundPermissionsAsync();

            if (granted) {
                const {coords} = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                });

                const { latitude, longitude} = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta:0.04,
                })
            }
        }

        loadInitialPosition();
    }, []);

    async function loadUsers(){
        const {latitude, longitude} = currentRegion;

        const response = await api.get('/search', {
            params: {
                latitude,
                longitude,
                techs
            }
        })

        setUsers(response.data.users);

    }

    function handleRegionsChanged(region){
        setCurrentRegion(region);
    }

    if(!currentRegion){
        return null;
    }

    return (
    <>
        <MapView
            onRegionChangeComplete={handleRegionsChanged}
            initialRegion={currentRegion}
            style={style.map}>

        {users.map(user => (
                        <Marker
                            key={user._id}
                            coordinate={{
                                longitude: user.location.coordinates[0],
                                latitude: user.location.coordinates[1]
                                }}>
                        <Image style={style.avatar} source={{uri: user.avatar_url}}/>

                        <Callout
                        style={style.callout}
                        onPress={() => {
                            navigation.navigate('Profile', {github_username: user.github_username})
                        }}>

                            <View style={style.callout}></View>
                                <Text style={style.name} >{user.name}</Text>
                                <Text style={style.bio} >{user.bio}</Text>
                                <Text style={style.techs} >{user.techs.join(', ')}</Text>
                        </Callout>
                    </Marker>
))}
        </MapView>

        <View style={style.searchForm}>
            <TextInput
                style={style.searchInput}
                placeholder="Buscar devs por"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                value={techs}
                onChangeText={setTechs}
                />

            <TouchableOpacity onPress={loadUsers} style={style.loadButton}>
                <MaterialIcons
                name="my-location"
                size={20}
                color="#FFF"
                />
            </TouchableOpacity>
        </View>
    </>
            )
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
    },

    searchForm:{
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
    },

    searchInput:{
        flex: 1,
        height: 50,
        backgroundColor: '#fff',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height:4
        },
        elevation: 2
    },

    loadButton:{
        width: 50,
        height: 50,
        backgroundColor: '#690375',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    }
})

export default Main;
/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file ImageHeader.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Thursday, 5th January 2023
 */

import { Image, StyleSheet, View } from 'react-native'

function ImageHeader(){
    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/logo.png')}
                resizeMode='contain'
            />
        </View>
    )
};

export default ImageHeader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: 120,
        height: 40
    },
})
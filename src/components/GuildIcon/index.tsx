import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';


export function GuildIcon() {
    const uri = 'https://apksshare.com/wp-content/uploads/2021/06/Discord-Talk-Video-Chat-Hang-Out-with-Friends-APK-MOD-Download-77.6-Stable.png';
    return (
        <Image
            source={{ uri }}
            style={ styles.image }
            resizeMode="cover"
        />
    );
}
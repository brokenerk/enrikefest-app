import React from 'react';
import SongItem from './SongItem';
import { Text } from 'react-native';

const SongList = (props) => {
    return (
        props.songs.map((song) => (
            <SongItem 
            id={song.id + song.title} 
            title={song.title} 
            artist={song.artist.name} 
            cover={song.album.cover}
            trackLink={song.link.split('/').slice(3, 5).join('/')}
            ></SongItem>
        ))
    );
};

export default SongList;
import React from 'react';
import SongItem from './SongItem';

const SongsList = (props) => {
    const songsList = props.songs;
    return (
        songsList.map((song) => (
            <SongItem
                id={song.id}
                title={song.title}
                artist={song.artist.name}
                cover={song.album.cover_big}
                trackLink={song.link.split('/').slice(3, 5).join('/')}
            ></SongItem>
        ))
    );
};

export default SongsList;
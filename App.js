import React, { useState } from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import deezer from './apis/deezer';
import TheSearchBar from './components/TheSearchBar';
import SongList from './components/SongList';

export default function App() {
    const [songs, setSongs] = useState([]);
    const [searchText, setSearchText] = useState('');

    const clearSongs = () => {
        setSongs([]);
    }

    const searchSongs = (term) => {
        setSearchText(term);

        deezer.get('/search', {
            params: {
                q: term
            }
        }).then((response) => {
            let songsFound = response.data.data;
            if (songsFound !== undefined) {
                setSongs(songsFound);
            }
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TheSearchBar 
                searchSongs={searchSongs}
                songs={songs}
                searchText={searchText}
                clearSongs={clearSongs} />
                <SongList songs={songs}/>
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
});

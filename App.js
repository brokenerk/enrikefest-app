import React, { useState } from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import deezer from './apis/deezer';
import SearchBar from './components/SearchBar';
import SongsList from './components/SongsList';

export default function App() {
    const [songs, setSongs] = useState([]);
    const [searchText, setSearchText] = useState('');

    const updateSearchText = (text) => {
        setSearchText(text);
    }

    const searchSongs = () => {
        deezer.get('/search', {
            params: {
                q: searchText
            }
        }).then((response) => {
            const songsFound = response.data.data;
            if (songsFound !== undefined) {
                setSongs(songsFound);
            }
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar
                searchSongs={searchSongs}
                searchText={searchText}
                updateSearchText={updateSearchText} 
            />
            <ScrollView>
                <SongsList songs={songs} />
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

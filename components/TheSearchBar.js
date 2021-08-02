import React from 'react';
import { SearchBar } from 'react-native-elements';

const TheSearchBar = (props) => {
    return (
        <SearchBar style="auto"
            searchIcon={{ size: 25 }}
            onChangeText={props.searchSongs}
            onClear={props.clearSongs}
            placeholder="Buscar una canción"
            value={props.searchText}
            showLoading
        />
    );
};

export default TheSearchBar;
import React from 'react';
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={props.updateSearchText}
                value={props.searchText}
                placeholder="Buscar una canción..."
                placeholderTextColor='#A4A4A4'
            />
            <Ionicons
                name="md-search-circle"
                size={50}
                style={styles.icon} 
                onPress={props.searchSongs}
                activeOpacity
                underlayColor='#000'/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#343434',
        flexDirection: 'row'
    },
    icon: {
        alignItems: 'center',
        marginTop: 5,
        width: '20%',
        color: "#A4A4A4"
    },
    input: {
        height: 40,
        margin: 10,
        width: '80%',
        backgroundColor: '#2C2C2C',
        borderRadius: 5,
        color: '#CFCFCF',
        padding: 10,
        fontSize: 16
    },
});

export default SearchBar;
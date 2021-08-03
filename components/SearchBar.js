import React from 'react';
import { StyleSheet, TextInput, View } from "react-native";
import { Icon } from 'react-native-elements'

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
            <Icon
                name="search-outline"
                type="ionicon"
                size={20}
                color="#2C2C2C"
                onPress={props.searchSongs}
                containerStyle={styles.icon}
                underlayColor="#343434"
            />
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
        backgroundColor: '#CFCFCF',
        borderRadius: 40,
        width: 40,
        height: 40,
        justifyContent: 'center',
        margin: 10
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
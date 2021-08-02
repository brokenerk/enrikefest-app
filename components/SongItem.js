import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ListItem, Image } from 'react-native-elements';

const SongItem = (props) => {
    return (
        <ListItem key={props.id} bottomDivider>
            <Image
                source={{ uri: props.cover }}
                style={{ width: 100, height: 100 }}
                transition
                PlaceholderContent={<ActivityIndicator size="large" />}
            />
            <ListItem.Content>
                <ListItem.Title>{props.title}</ListItem.Title>
                <ListItem.Subtitle>{props.artist}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};

export default SongItem;
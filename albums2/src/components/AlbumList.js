import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state = { albums: [],x: 1 };

    componentDidMount() {
            axios.get('https://rallycoding.herokuapp.com/api/music_albums')
                .then(response => this.setState({ albums: response.data }));
            this.setState({ x: this.state.x + 1 });
        }

    render() {
        let x = x + 1;
        console.log(this.state.albums);
        console.log(this.state.x);
        return (
            <View>
                <Text>AlbumList</Text>
            </View>
        );
    }
}

export default AlbumList;

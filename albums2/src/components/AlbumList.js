import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state = { albums: [], x: 1 };
    //constructor() {
    //    var x = 0;
    //}
    

    componentDidMount() {
            let myvar;
            axios.get('https://rallycoding.herokuapp.com/api/music_albums')
                .then(response => this.setState({ albums: response.data }));
            this.setState({ x: this.state.x + 1 });
        }

    renderAlbums() {
        return this.state.albums.map(album => <Text>{album.title}</Text>);
    } 

    render() {
        
        console.log(this.state.albums);
        console.log(this.state.x);
        //console.log('x is: ',x);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;

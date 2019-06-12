import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    } 

    render() {
        
        console.log(this.state.albums);
        console.log(this.state.x);
        //console.log('x is: ',x);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;

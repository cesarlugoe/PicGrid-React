import React, { Component } from 'react';
import PhotoServer from '../lib/PhotoServer';
import SearchBar from './SearchBar';


class App extends Component {

   state = {
      images: [],
   }

  onSearchSubmit = async (query) => {
      const response = await PhotoServer.findPhotos(query);
      const { results } = response.data;
      this.setState({ images: results });
   }

   render() {

      const { images } = this.state;
      return (
            <div className="ui container" style={{ marginTop: '10px' }}>
               <SearchBar onSubmit={this.onSearchSubmit}/>
               Found: {images.length} images
            </div>
      );
   } 
};

export default App;
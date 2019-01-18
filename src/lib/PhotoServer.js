import axios from 'axios';

class PhotoServer {
   constructor() {
      this.search = axios.create();
   }


   findPhotos(query) {
      return this.search
         .get(
            'https://api.unsplash.com/search/photos', {
            params: {
               query: query,
            },
            headers: {
                  Authorization: 'Client-ID 0db500086dd672972c7f7e4e4af6693a998fe57a285018616e1062b4b63a1354',
            },
         });
         
   }

}

const photoServer= new PhotoServer();

export default photoServer;
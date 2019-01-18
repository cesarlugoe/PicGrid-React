import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
   const { images } = props;

   const imageGroup = images.map(image => {
        return <ImageCard key={image.id} image={image} />
      })
   
   return <div className="image-list">{imageGroup}</div>;
}

export default ImageList;
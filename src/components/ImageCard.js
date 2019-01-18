import React from 'react';

class ImageCard extends React.Component {
   state = {
      imageRef: React.createRef(),
      imageSpans: 0,
   }

   componentDidMount() {
      const { imageRef } = this.state;
      imageRef.current.addEventListener('load', this.setImageSpans);
   }

   setImageSpans = () => {
      const height = this.state.imageRef.current.clientHeight;
      const imageSpans = Math.ceil((height / 10));

      this.setState({
         imageSpans: imageSpans,
      })
    
   }

   render() {
      const { description, urls } = this.props.image;
      const { imageRef, imageSpans } = this.state;
      return (
         <div style={{ gridRowEnd:`span ${imageSpans}` }}>
            <img alt={description} src={urls.regular} ref={imageRef}/>
         </div>
      )
   }
}

export default ImageCard;
import React, { Component } from 'react';


class SearchBar extends Component {

   state = {
      query: '',
   };

   handleFormSubmit = (event) => {
      event.preventDefault();
      const { query } = this.state;
      
      this.props.onSubmit(query);
   }

   onChange = (event) => {
      this.setState({ query: event.target.value });
   }

   render() {
      return (
         <div className="ui segment"> 
            <form className="ui form" onSubmit={this.handleFormSubmit}>
               <div className="field">
                  <label>Image Search</label>
                  <input 
                     type="text" 
                     value={this.state.query}
                     onChange={this.onChange}
                  />
               </div>   
            </form>
         </div>
      );
   };
}

export default SearchBar;
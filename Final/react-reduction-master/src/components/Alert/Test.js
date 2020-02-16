import React, { Component } from 'react';
import axios from 'axios';
import { searchByName } from '../../pages/operator/UserFunction';

import Movies from './Movies';

class Test extends Component {
  state = {
    movies: null,
    loading: false,
    value: ''
  };

  search = val => {
    const user = {
        searchId: val
    }    
    this.setState({ loading: true });
    searchByName(user).then(res => {
        if(res) {
          console.log('qqqqqqqqqqqqq');
          console.log(res);
          if(res){
            const movies = res;  
            this.setState({ movies, loading: false });
          }
          else{
            
          }
        }
      })
    

    
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderMovies() {
    let movies = <h1>There's no movies</h1>;
    if (this.state.movies) {
        movies = this.state.movies.map((movie) => <li>{movie.name}</li>)
    }

    return movies;
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type something to search"
        />
        {this.renderMovies}
      </div>
    );
  }
}

export default Test;
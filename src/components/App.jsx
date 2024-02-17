import React, { Component } from 'react';
import ImageGallery from './imageGallery/ImageGallery';
import axios from 'axios';
import Searchbar from './searchbar/Searchbar.jsx';
const API_KEY = '41240894-272bca1f2c3dcb1548b81eb12';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      perPage: 12,
      currentPage: 2,
      queryValue: '',
      images: [],
      isLoading: false,
    };
  }

  fetchImages = async () => {
    try {
      const { perPage, currentPage, queryValue } = this.state;
      const response = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
          queryValue
        )}&image_type=photo&orientation=horizontal&page=${currentPage}&per_page=${perPage}`
      );
      const images = response.data;
      this.setState({ images: images.hits });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  async componentDidMount() {
    await this.fetchImages();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentPage !== this.state.currentPage ||
      prevState.queryValue !== this.state.queryValue
    ) {
      this.fetchImages();
    }
  }
  onSubmit = evt => {
    evt.preventDefault();
    const value = evt.target[1].value;
    this.setState({
      queryValue: value,
      currentPage: 1,
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}

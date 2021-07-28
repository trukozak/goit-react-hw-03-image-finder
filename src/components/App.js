import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchPicturesApi from '../services/api';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import AppLoader from './Loader/Loader';
class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    largeImageUrl: '',
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    }
  }
  fetchPictures = () => {
    const { currentPage, searchQuery } = this.state;

    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    fetchPicturesApi(options)
      .then(hits => {
        this.setState(prev => ({
          hits: [...prev.hits, ...hits],
          currentPage: prev.currentPage + 1,
        }));
      })
      .catch(console.log)
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  onFormSubmit = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
    });
  };

  onToggleModal = url => {
    this.setState({ largeImageUrl: url ? url : '' });
  };

  render() {
    const { hits, isLoading, largeImageUrl } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onFormSubmit} />
        {largeImageUrl && (
          <Modal onClose={this.onToggleModal} url={largeImageUrl} />
        )}
        <ImageGallery hits={hits} onClick={this.onToggleModal} />
        {!!hits.length && !isLoading && (
          <Button fetchPictures={this.fetchPictures} />
        )}
        {isLoading && <AppLoader />}
      </div>
    );
  }
}

export default App;

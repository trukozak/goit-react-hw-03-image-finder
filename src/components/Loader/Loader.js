import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class AppLoader extends Component {
  render() {
    return (
      <Loader
        type="Circles"
        color="#3f51b5"
        height={40}
        width={40}
        timeout={4000} //3 secs
        className="loader"
      />
    );
  }
}

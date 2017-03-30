import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';


class VideoTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // video: VideoFrame
    };
  }

  componentDidMount() {
    axios.get('/api-videoFrame-test')
      .then(res => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <VideoPlayer/>
      </div>
    )
  }
};

export default VideoTest;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';


const VideoTest= (props) => {

    return (
      <div>
        <VideoPlayer
          videoCurrent={props.videoCurrent}
          onInputChange={props.onInputChange}
        />
      </div>
    )
  };

export default VideoTest;

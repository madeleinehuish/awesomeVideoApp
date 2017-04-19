import React, { Component } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = (props) => {

    return (
      <div>
        <ReactPlayer
          id="videoPlayer"
          // controls
          // autoplay
          // width='400'
          // height='400'
          url={props.videoCurrent}
          src={props.videoCurrent.filereference}
          // src={this.state.filePath}
          // src="file://maddiehuish/Projects/videoApp/serverAPI/Videos/video1.mp4"
          // url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          playing />
          {/* <form><input type="file" accept="video/*" onChange={props.onInputChange}/></form> */}
      </div>
    )
  };

export default VideoPlayer;

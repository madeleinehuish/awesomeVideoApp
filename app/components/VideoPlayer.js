import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class VideoPlayer extends Component {
  constructor(props) {
		super(props);

		this.state = { filePath: '' };
	}

  onInputChange(value) {
		this.setState({ filePath: value });
    console.log('onInputChange');
		// this.props.onSearchTermChange(file);
	}

  render () {
    console.log(this.state);
    return (
      <div>

        <ReactPlayer
          id="videoPlayer"
          // controls
          // autoplay
          // width='400'
          // height='400'
          url={this.state.filePath}
          // src="file://maddiehuish/Projects/videoApp/serverAPI/Videos/video1.mp4'"
          // url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          playing />
          <input type="file" accept="video/*" value={this.state.filePath} onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    )
  }
}

export default VideoPlayer;

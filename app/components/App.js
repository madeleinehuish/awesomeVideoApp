import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import VideoTest from './VideoTest';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}
  render() {
    return (
      <div>
        <Header/>
        <Main/>
				<VideoTest/>
        <Footer/>
      </div>
    );
  }
};

export default App;

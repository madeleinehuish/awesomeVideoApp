import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
//test ok lets hope this works

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
      videoCurrent: '',
			filePath: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
	}

  componentDidMount() {
	// axios.get('/api-getVideoFromFile')
	axios.get('/api-getVideoFromAWS')
    .then(res => {
      console.log(res);
      this.setState({ videoCurrent: res.data})
    })
		.then(res => {
			axios.get('/api-videoFrame-test')
				.then(res => {
					console.log(res)
				})
				.catch((error) => {
		    console.log(error);
		    });
		})
    .catch((error) => {
    console.log(error);
    });
  }

	onInputChange(event) {
    console.log('onInputChange');
    console.log(event.target.value);
		this.setState({ filePath: event.target.value });

		// this.props.onSearchTermChange(file);
	}

  render() {
    return (
      <div>
        <Header/>
        <Main
					videoCurrent={this.state.videoCurrent}
					onInputChange={this.onInputChange}
				/>
        <Footer/>
      </div>
    );
  }
};

export default App;

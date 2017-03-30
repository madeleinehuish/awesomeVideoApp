import React from 'react';
import SearchBar from './SearchBar';
import VideoTest from './VideoTest';

const Main = () => {
  return (
    <div style={styles.main}>
      <div className="container">
        <div className= "row">
          {/* <div className="videoScreen col-sm-6" style={styles.videoScreen}>
            <p style={styles.videoScreenText}>Upload your video here</p>
          </div> */}
          <VideoTest />
          <SearchBar />
        </div>
      </div>
    </div>
  )
};

export default Main;

const styles = {
  main: {
    backgroundColor: '#D9DAE0',
    height: 600,
    // height: '600px',
    padding: 20
  },

  // videoScreen: {
  //   height: '35em',
  //   width: '35em',
  //   backgroundColor: '#000',
  // },
  //
  // videoScreenText: {
  //   fontSize: '14px',
  //   color: '#fff',
  //   textAlign: 'center',
  // }
}

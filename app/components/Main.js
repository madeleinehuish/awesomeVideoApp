import React from 'react';
import SearchBar from './SearchBar';

const Main = () => {
  return (
    <div style={styles.main}>
      <div className="container">
        <div className= "row col-sm-6">
          <div className="videoScreen col-sm-6" style={styles.videoScreen}>
            <p style={styles.videoScreenText}>Upload your video here</p>
          </div>
          <SearchBar/>
        </div>
      </div>
    </div>
  )
};

export default Main;

const styles = {
  main: {
    backgroundColor: '#D9DAE0',
    height: '100%',
    padding: 20
  },

  videoScreen: {
    height: '35em',
    width: '35em',
    backgroundColor: '#000',
  },

  videoScreenText: {
    fontSize: '14px',
    color: '#fff',
    textAlign: 'center',
    
  }
}

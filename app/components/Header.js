import React from 'react';

const Header = () => {
  return (
    <div style={styles.nav}>
      <div className="container">
        <p style={styles.navText}>Awesome Video App</p>
      </div>
    </div>
  )
};

export default Header;

const styles = {
  nav: {
    backgroundColor: '#4C4E60'
  },
  navText: {
    fontFamily: 'Overpass Mono',
    color: '#D9DAE0',
    padding: '.5em',
    fontSize: '28px'
  }
}

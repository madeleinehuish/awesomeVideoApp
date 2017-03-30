import React from 'react';

const Footer = () => {
  return (
    <div style={styles.footer}>
      <div className="container">
        <p style={styles.footerText}>	&#169; MH & CK</p>
      </div>
    </div>
  )
};

export default Footer;

const styles = {
  footer: {
    backgroundColor: '#4C4E60'
  },
  footerText: {
    fontFamily: 'Overpass Mono',
    color: '#D9DAE0',
    padding: '.5em',
    fontSize: '14px'
  }
}

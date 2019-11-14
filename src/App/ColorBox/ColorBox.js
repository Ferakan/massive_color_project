import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import styles from './ColorBoxStyles';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const {name, background, moreURL, isFullPalette, classes} = this.props;
    const { copied } = this.state;

    return(
      <CopyToClipboard 
        text={background} 
        onCopy={this.changeCopyState}
      >
        <div  
          style={{background}} 
          className={classes.colorBox} 
        >
          <div 
            style={{background}} 
            className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} 
          />
          <div className={`${classes.copyMsg} ${copied && classes.showMsg}`} >
            <h1>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.copyText}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {isFullPalette && (
            <Link to={moreURL} onClick={e => e.stopPropagation() }>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import chroma from 'chroma-js';

const styles = {
  colorBox: {
    width: "20%",
    height: props => 
      props.isFullPalette ? "25%": "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: 1,
      transition: "0.5s"
    }
  },
  copyButton: {
    color: props => 
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textDecoration: "none",
    textTransform: "uppercase",
    border: "none",
    cursor: "pointer",
    opacity: 0
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  seeMore: {
    color: props => 
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyOverlay: {
    opacity: 0,
    zIndex: 0,
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)",
  },
  showOverlay: {
    opacity: 1,
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },
  copyMsg: {
    position: "fixed",
    top: "0", 
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "black",
  },
  showMsg: {
    opacity: 1,
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
    "& h1": {
      color: props => 
        chroma(props.background).luminance() <= 0.08 ? "white" : "black",
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
      textTransform: "uppercase",
    }
  },
  copyText: {
    color: props => 
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
    fontWeight: "500"
  },
};

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
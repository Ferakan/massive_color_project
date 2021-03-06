import chroma from 'chroma-js';
import sizes from "../Utils/mediaQueries";

export default {
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
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: props => 
      (props.isFullPalette ? "20%": "33.333333333%"),
    },
    [sizes.down("md")]: {
      width: "50%",
      height: props => 
      (props.isFullPalette ? "10%": "20%"),
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: props => 
      (props.isFullPalette ? "5%": "10%"),
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
    width: "93%",
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
      textTransform: "uppercase",
      [sizes.down("xs")]: {
        fontSize: "6rem"
      }
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
      textTransform: "uppercase",
    }
  },
  showMsg: {
    opacity: 1,
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
  },
  copyText: {
    color: props => 
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
    fontWeight: "500"
  },
};

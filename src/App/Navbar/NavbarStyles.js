import sizes from "../Utils/mediaQueries";

export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },
  logo: {
    marginRight: "50px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
    [sizes.down("md")]: {
      marginRight: "30px",
    },
  },
  sliderContainer: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    [sizes.down("sm")]: {
      display: "none",
    },
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
      backgroundColor: "#2f91d3",
      outline: "none",
      border: "2px solid #2f91d3",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginTop: "-4px",
    },
    [sizes.down("md")]: {
      width: "200px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
  sliderSmallContainer: {
    display: "none",
    "& span": {
      display: "none"
    },
    [sizes.down("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  smallSlider: {
    width: "100%",
    margin: "5px 3rem 10px 3rem",
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
      backgroundColor: "#2f91d3",
      outline: "none",
      border: "2px solid #2f91d3",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginTop: "-4px",
    },
  }
}
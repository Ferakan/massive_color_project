import sizes from "../Utils/mediaQueries";

export default {
  palette: {
    height: "100vh"
  },
  paletteColors: {
    height: "90%",
    overflow: "hidden"
  },
  goBack: {
    width: "20%",
    height: "50%",
    backgroundColor: "black",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "& a": {
      color: "white",
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
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "33.333333333%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%",
    }
  },
  paletteFooter: {
    backgroundColor: "white",
    height: "4vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
  },
  paletteEmoji: {
    margin: "0 1rem"
  }
};

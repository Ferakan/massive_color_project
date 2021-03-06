import sizes from "../Utils/mediaQueries";
import bg from '../Utils/Backgrounds/bg.svg';

export default {
  "@global": {
    ".fade-exit": {
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 0.5s ease-out"
    }
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#4677c7",
    backgroundImage: `url(${bg})`,
    overflow: "auto"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    marginBottom: "3%",
    [sizes.down("xl")]: {
      width: "70%"
    },
    [sizes.down("lg")]: {
      width: "80%",
      marginBottom: "10%",
    },
    [sizes.down("xs")]: {
      width: "70%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#111",
    fontWeight: "700",
    fontSize: "1.7rem",
    [sizes.down("md")]: {
      flexDirection: "column",
      marginBottom: "2rem"
    },
  },
  title: {
    fontFamily: "'Pacifico', cursive",
    fontSize: "3.5rem",
    color: "#111",
    margin: "1rem 0",
    [sizes.down("md")]: {
      textAlign: "center"
    },
    [sizes.down("xs")]: {
      fontSize: "4rem"
    },
  },
  letterR: {
    color: "#cd2b2c"
  },
  letterC: {
    color: "#45c932"
  },
  letterP: {
    color: "#2fa5d8"
  },
  createBtn: {
    backgroundColor: "#2fa5d8",
    "& a": {
      textDecoration: "none",
      color: "#eee"
    },
    "&:hover": {
      backgroundColor: "#1e698c",
    }
  },
  palette: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 49%)",
      gridGap: "2%",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.2rem",
    }
  }
};
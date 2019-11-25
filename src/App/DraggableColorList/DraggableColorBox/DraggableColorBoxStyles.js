import chroma from 'chroma-js';

export default {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    backgroundColor: props => props.color,
    "&:hover svg": {
      transform: "scale(1.5)"
    }
  },
  boxContent: {
    color: props => 
      chroma(props.color).luminance() <= 0.08 ? "white" : "black",
    position: "absolute",
    width: "93%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
  }
}
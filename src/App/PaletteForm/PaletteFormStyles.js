import { DRAWER_WIDTH } from '../Utils/constants';
// import sizes from "../Utils/mediaQueries";
const drawerWidth = DRAWER_WIDTH;


const styles = theme => ({
  root: {
    display: 'flex',
  },
   drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    display: "flex",
    width: drawerWidth,
    alignItems: "center"
  },
  drawerHeader: {
    width: "95%",
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  buttons: {
    width: "100%"
  },
  button: {
    width: "50%"
  }
});

export default styles;
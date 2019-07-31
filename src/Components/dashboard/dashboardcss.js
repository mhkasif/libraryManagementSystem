import { makeStyles } from "@material-ui/core/styles";

export const drawerWidth = 240;
const useStyles = makeStyles(theme => ({

  nested: {
    paddingLeft: theme.spacing(4)
  },
  studentSelect: {
    marginTop: theme.spacing(2)
  },
  profilePic: {
    height: 250,
    width: "100%",
    objectFit: "contain",
    borderRadius: 5
  },
  erPage:{
   
  },
  profileFieldsGrid: { height: "100%" },
  profilePicGrid: {},
  ProfileMain: {
   width: `calc(95% - ${drawerWidth}px)`,
    height: "80vh",
    position: "absolute"
  },
  typ1: {
    width: "100%",
    textAlign: "left"
  },
  typ2: {
    width: "100%",
    textAlign: "right"
  },
  card: {
    width: "100%"
  },
  media: {
    height: 300,
    width: "100%",
    objectFit: "contain"
  },

  ColorFullBoxes: {
    fontSize: 70,
    opacity: 0.3,
    marginRight: 20,
    transition: "all ease 0.7s"
  },

  boxContainer: {
    paddingBottom: 20
  },
  Issue: {
    height: 100,
    width: 100,
    background: "rgb(0,192,239)",
    cursor: "pointer",
    opacity: 0.9,
    "&:hover $ColorFullBoxes": {
      transform: "scale(1.2,1.2)"
    }
  },

  User: {
    height: 100,
    width: 100,
    background: "rgb(0,166,90)",
    cursor: "pointer",
    opacity: 0.9,

    "&:hover $ColorFullBoxes": {
      transform: "scale(1.2,1.2)"
    }
  },

  Books: {
    height: 100,
    width: 100,
    background: "rgb(221,75,57)",
    cursor: "pointer",
    opacity: 0.9,
    "&:hover $ColorFullBoxes": {
      transform: "scale(1.2,1.2)"
    }
  },

  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export default useStyles;

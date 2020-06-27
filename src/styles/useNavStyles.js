import { makeStyles } from "@material-ui/core/styles"

const drawerWidth = 240

export const useNavStyles = makeStyles(theme => ({
         root: {
           display: "flex",
  },
  headerBar: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "8vw",
  },
         link: {
           color: "#333",
           fontSize: "1.5rem",
           textDecoration: "none",
           marginLeft: "2%",
         },
         appBar: {
           transition: theme.transitions.create(["margin", "width"], {
             easing: theme.transitions.easing.sharp,
             duration: theme.transitions.duration.leavingScreen,
             
           }),
           color: "#ddd",
           boxShadow: "none"
         },
         appBarShift: {
           width: `calc(100% - ${drawerWidth}px)`,
           marginLeft: drawerWidth,
           transition: theme.transitions.create(["margin", "width"], {
             easing: theme.transitions.easing.easeOut,
             duration: theme.transitions.duration.enteringScreen,
           }),
         },
         menuButton: {
           marginRight: theme.spacing(2),
         },
         hide: {
           display: "none",
         },
         drawer: {
           width: drawerWidth,
           flexShrink: 0,
         },
         drawerPaper: {
           width: drawerWidth,
           background: "linear-gradient(180deg, #004a91 0%,#77cc36 100%)",
           border: "none",
         },
         drawerHeader: {
           display: "flex",
           alignItems: "center",
           padding: theme.spacing(0, 1),
           ...theme.mixins.toolbar,
           justifyContent: "flex-end",
           background: "rgba(25, 85, 135, 1)",
           border: "none",
         },

         icon: {
           color: "#333",
           fontSize: "2rem",
           paddingRight: "-10px"
         },
       }))

import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme => ({
         root: {
           padding: theme.spacing(3, 2),
           textAlign: "center",
           background: "#3f51b5",
           color: "white",
           display: "flex",
           flexDirection: "column",
           justifyContent: "center",
           alignItems: "center",
         },
         container: {
           display: "flex",
           flexDirection: "column",
           justifyContent: "center",
           alignItems: "center",
           width: "80vw",
           marginTop: "4rem",
           padding: "5rem",
         },
         flex: {
           display: "flex",
           flexDirection: "column",
           justifyContent: "center",
           alignItems: "center",
         },
         titleOuter: {
           padding: "1rem",
           marginBottom: "1rem",
         },
         img: {
           width: "95%",
           borderRadius: "8px",
           boxShadow:
             "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.7)",
         },
         contactImg: {
           width: "50%",
           borderRadius: "8px",
           boxShadow:
             "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.7)",
         },
         paper: {
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           flexDirection: "column",
           padding: "1rem",
           marginBottom: "1rem",
           textAlign: "center",
         },
         orderedList: {
           listStyleType: "none",
           display: "flex",
           flexDirection: "column",
           justifyContent: "center",
           alignItems: "center",
         },
         contactInfo: {
           padding: "1rem",
           marginBottom: "1rem",
           display: "flex",
           flexDirection: "column",
           
         },
         link: {
           color: "#3f51b5",
           textDecoration: "none",
         },
       }))

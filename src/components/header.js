import React from "react"
import { Link} from "gatsby"
import {
  Typography,
  ListItem,
} from "@material-ui/core"
import "../styles/styles.css"
import { useNavStyles } from "../styles/useNavStyles"

export default function Header(props) {
  const classes = useNavStyles()

  return (
    <div className="headerBar">
          <Link className={classes.link} to="/">
            <ListItem>
              <Typography variant="h6">Home</Typography>
            </ListItem>
          </Link>
          <Link className={classes.link} to="/blog">
            <ListItem>
              <Typography variant="h6">Blog</Typography>
            </ListItem>
          </Link>
          <Link className={classes.link} to="/about">
            <ListItem>
              <Typography variant="h6">About</Typography>
            </ListItem>
          </Link>
          <Link className={classes.link} to="/contact">
            <ListItem>
              <Typography variant="h6">Contact</Typography>
            </ListItem>
          </Link>
    </div>
  )
}

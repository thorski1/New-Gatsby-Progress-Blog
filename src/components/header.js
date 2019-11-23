import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import clsx from "clsx"
import { useTheme } from "@material-ui/core/styles"
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
} from "@material-ui/core"

import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import HomeIcon from "@material-ui/icons/Home"
import CreateIcon from "@material-ui/icons/Create"
import PhoneIcon from "@material-ui/icons/Phone"
import ContactSupportIcon from "@material-ui/icons/ContactSupport"
import { useNavStyles } from "../styles/useNavStyles"

export default function Header(props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  const classes = useNavStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link className={classes.link} to="/">
            <ListItem style={{ padding: "1rem" }} button>
              <ListItemIcon>
                <HomeIcon className={classes.icon} />
              </ListItemIcon>
              <Typography variant="h6">Home</Typography>
            </ListItem>
          </Link>
          <Link className={classes.link} to="/blog">
            <ListItem style={{ padding: "1rem" }} button>
              <ListItemIcon>
                <CreateIcon className={classes.icon} />
              </ListItemIcon>
              <Typography variant="h6">Blog</Typography>
            </ListItem>
          </Link>
          <Link className={classes.link} to="/about">
            <ListItem style={{ padding: "1rem" }} button>
              <ListItemIcon>
                <ContactSupportIcon className={classes.icon} />
              </ListItemIcon>
              <Typography variant="h6">About</Typography>
            </ListItem>
          </Link>
          <Link className={classes.link} to="/contact">
            <ListItem style={{ padding: "1rem" }} button>
              <ListItemIcon>
                <PhoneIcon className={classes.icon} />
              </ListItemIcon>
              <Typography variant="h6">Contact</Typography>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  )
}

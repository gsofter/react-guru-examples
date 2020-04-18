import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import AppsIcon from '@material-ui/icons/Apps'
import BlurOnIcon from '@material-ui/icons/BlurOn'
import InboxIcon from '@material-ui/icons/Inbox'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'
import Collapse from '@material-ui/core/Collapse'
import Game1 from './stages/game1'
import Game2 from './stages/game2'
import Chapter3 from './chapters/Chapter3'
import Chapter4 from './chapters/Chapter4'
import Chapter5 from './chapters/Chapter5'
import Chapter6 from './chapters/Chapter6'
import Chapter7 from './chapters/Chapter7'
import Chapter8 from './chapters/Chapter8'
import Chapter9 from './chapters/Chapter9'
import Chapter10 from './chapters/Chapter10'
import Chapter12 from './chapters/Chapter12'
import Chapter14 from './chapters/Chapter14'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
import './style.css'
const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

export default function App(props) {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [chapterOpen, setChapterOpen] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleChapterCollapse = () => {
    setChapterOpen(!chapterOpen)
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
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            React Examples
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="home"></ListItemText>
            </ListItem>
            <ListItem button component={RouterLink} to="/game1">
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary="3*3" />
            </ListItem>
            <ListItem button component={RouterLink} to="/game2">
              <ListItemIcon>
                <BlurOnIcon />
              </ListItemIcon>
              <ListItemText primary="5*5" />
            </ListItem>
            <ListItem button onClick={handleChapterCollapse}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Chapters" />
              {chapterOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={chapterOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  className={classes.nested}
                  component={RouterLink}
                  to="/chapters/chapter3"
                >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Chapter3 - Components" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component={RouterLink}
                  to="/chapters/chapter4"
                >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Chapter4 - Eventhandling" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component={RouterLink}
                  to="/chapters/chapter5"
                >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Chapter5" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component={RouterLink}
                  to="/chapters/chapter6"
                >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Chapter6" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component={RouterLink}
                  to="/chapters/chapter7"
                >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Chapter7" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component={RouterLink}
                  to="/chapters/chapter8"
                >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Chapter8" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component={RouterLink}
                  to="/chapters/chapter9"
                >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Chapter9" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component={RouterLink}
                  to="/chapters/chapter10"
                >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Chapter10" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component={RouterLink}
                  to="/chapters/chapter12"
                >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Chapter12" />
                </ListItem>

                <ListItem
                  button
                  className={classes.nested}
                  component={RouterLink}
                  to="/chapters/chapter14"
                >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Chapter14" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Switch>
            <Route exact path="/">
              <Game1 />
            </Route>
            <Route path="/game1">
              <Game1 />
            </Route>
            <Route path="/game2">
              <Game2 />
            </Route>
            <Route  path="/chapters/chapter3">
              <Chapter3 />
            </Route>
            <Route  path="/chapters/chapter4">
              <Chapter4 />
            </Route>
            <Route  path="/chapters/chapter5">
              <Chapter5 />
            </Route>
            <Route  path="/chapters/chapter6">
              <Chapter6 />
            </Route>
            <Route  path="/chapters/chapter7">
              <Chapter7 />
            </Route>
            <Route  path="/chapters/chapter8">
              <Chapter8 />
            </Route>
            <Route path="/chapters/chapter9">
              <Chapter9 />
            </Route>
            <Route path="/chapters/chapter10">
              <Chapter10 />
            </Route>
            <Route path="/chapters/chapter12">
              <Chapter12 />
            </Route>
            <Route path="/chapters/chapter14">
              <Chapter14 />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  )
}

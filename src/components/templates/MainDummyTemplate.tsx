import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid/Grid'
import TitleBar from '../organisms/TitleBar'
import VideoListDummyTemplate from './VideoListDummyTemplate'
import LabelBottomNavigationDummy from '../organisms/LabelBottomNavigationDummy'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: {
    height: 52,
  },
  labelBottomNavigation: {
    bottom: 0,
    position: 'fixed',
  },
})

function MainDummyTemplate(props) {
  const { classes, videos } = props
  return (
    <div className={classes.root}>
      <TitleBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <VideoListDummyTemplate videos={videos} />
      </main>
      <Grid container justify="center" className={classes.labelBottomNavigation}>
        <LabelBottomNavigationDummy />
      </Grid>
    </div>
  )
}

MainDummyTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  videos: PropTypes.array.isRequired,
}

export default withStyles(styles)(MainDummyTemplate)

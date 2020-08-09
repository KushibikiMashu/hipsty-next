import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid/Grid'
import TitleBar from '../organisms/TitleBar'
import Routing from '../pages/Routing'
import LabelBottomNavigation from '../organisms/LabelBottomNavigation'

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
    backgroundColor: '#FAFAFA',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    minWidth: 0,
  },
  toolbar: {
    height: 52,
  },
  labelBottomNavigation: {
    bottom: 0,
    position: 'fixed',
  },
})

function MainTemplate(props) {
  const { classes, videos, newVideos } = props
  return (
    <div className={classes.root}>
      <TitleBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routing videos={videos} newVideos={newVideos} />
      </main>
      <Grid container justify="center" className={classes.labelBottomNavigation}>
        <LabelBottomNavigation />
      </Grid>
    </div>
  )
}

MainTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  videos: PropTypes.array.isRequired,
  newVideos: PropTypes.array.isRequired,
}

export default withStyles(styles)(MainTemplate)

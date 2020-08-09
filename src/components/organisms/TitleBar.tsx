import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography/Typography'
import Link from 'next/link'

const styles = (theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#212121',
  },
  title: {
    height: 64,
    marginBottom: 0,
    textAlign: 'left',
    textDecoration: 'none',
    marginLeft: theme.spacing.unit * 3 - 8,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 'calc(100% * 1 / 8)',
    },
  },
})

function TitleBar(props) {
  const { classes } = props
  return (
    <AppBar className={classes.appBar} position="absolute">
      <Toolbar>
        <Link href="/">
          <Typography className={classes.title} variant="title" color="inherit" noWrap>
            <img src="/image/logo.png" alt="HIPSTY" height="64" />
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

TitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TitleBar)

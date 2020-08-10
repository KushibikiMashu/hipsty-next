import React from 'react'
import { Theme, withStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography/Typography'
import Link from 'next/link'
import { createStyles, WithStyles } from '@material-ui/styles'

type Props = WithStyles<typeof styles>

const Component: React.FC<Props> = (props) => (
  <AppBar className={props.classes.appBar} color={'primary'} position="absolute">
    <Toolbar>
      <Link href="/">
        <a>
          <Typography className={props.classes.title} color="inherit" noWrap>
            <img src="/image/logo.png" alt="HIPSTY" height="64" />
          </Typography>
        </a>
      </Link>
    </Toolbar>
  </AppBar>
)

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: '#212121',
    },
    title: {
      height: 64,
      marginBottom: 0,
      textDecoration: 'none',
    },
  })

export default withStyles(styles)(Component)

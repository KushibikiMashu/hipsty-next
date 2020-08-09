import React from 'react'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid/Grid'
import TitleBar from '../organisms/TitleBar'
import LabelBottomNavigation from '../organisms/LabelBottomNavigation'
import { createStyles, WithStyles } from '@material-ui/styles'

type Props = WithStyles<typeof styles>

const Component: React.FC<Props> = (props) => (
  <div className={props.classes.root}>
    <TitleBar />
    <main className={props.classes.content}>
      <div className={props.classes.toolbar} />
      {props.children}
    </main>
    <Grid container justify="center" className={props.classes.labelBottomNavigation}>
      <LabelBottomNavigation />
    </Grid>
  </div>
)

const styles = (theme) =>
  createStyles({
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
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
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

Component.displayName = 'Layout'

export default withStyles(styles)(Component)

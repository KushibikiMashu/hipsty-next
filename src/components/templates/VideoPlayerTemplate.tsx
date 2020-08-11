import React from 'react'
import { withStyles } from '@material-ui/core'
import VideoCardPlaying from '../organisms/VideoCardPlaying'
import Grid from '@material-ui/core/Grid/Grid'
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import { WithStyles } from '@material-ui/styles'
import { Video } from '../../types/Video'

interface Props extends WithStyles<typeof styles> {
  video: Video
}

const Component: React.FC<Props> = (props) => (
  <>
    <Grid container justify="center" className={props.classes.player}>
      <Grid item>
        <VideoCardPlaying video={props.video} />
      </Grid>
    </Grid>
    <Grid container justify="center" direction="row">
      <Link href="/">
        <a>
          <Button variant="contained" color="primary" className={props.classes.button}>
            HOME
          </Button>
        </a>
      </Link>
    </Grid>
  </>
)

const styles = {
  player: {
    paddingTop: 12,
  },
  button: {
    padding: '12px 24px',
    marginTop: 24,
    marginBottom: 56,
  },
}

export default withStyles(styles)(Component)

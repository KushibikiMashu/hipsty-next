import React from 'react'
import { withStyles } from '@material-ui/core'
import VideoCardPlaying from '../organisms/VideoCardPlaying'
import Grid from '@material-ui/core/Grid/Grid'
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import { WithStyles } from '@material-ui/styles'
import { Video, Videos } from '../../types/Video'

interface Props extends WithStyles<typeof styles> {
  playingVideo: Video
}

const Component: React.FC<Props> = (props) => (
  <>
    <Grid container justify="center" spacing={10}>
      <Grid item>
        <VideoCardPlaying video={props.playingVideo} />
      </Grid>
    </Grid>
    <Grid container justify="center" direction="row">
      <Link href="/">
        <a>
          <Button variant="outlined" className={props.classes.button}>
            HOME
          </Button>
        </a>
      </Link>
    </Grid>
  </>
)

const styles = {
  button: {
    marginTop: 12,
    marginBottom: 44,
  },
}

interface ContainerProps extends WithStyles<typeof styles> {
  videos: Videos
}

const Container: React.FC<ContainerProps> = (props) => {
  const hash = location.pathname.split('/').pop()
  const playingVideo = []
  props.videos.map((video) => {
    if (video.hash !== hash) {
      return
    }
    playingVideo.push(video)
  })

  return <Component {...props} playingVideo={props.videos[0]} />
}

export default withStyles(styles)(Container)

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import VideoCardPlaying from '../organisms/VideoCardPlaying'
import Grid from '@material-ui/core/Grid/Grid'
import Button from '@material-ui/core/Button'
import Link from 'next/link'

const styles = {
  button: {
    marginTop: 12,
    marginBottom: 44,
  },
}

function VideoPlayerTemplate(props) {
  // propsでvideoのオブジェクトを渡してもらう。
  // そのvideoをMainVideoに渡す。
  const { classes, videos } = props
  const hash = location.pathname.split('/').pop()
  let playingVideo = []
  videos.map((video) => {
    if (video.hash !== hash) {
      return
    }
    playingVideo = video
  })
  return (
    <React.Fragment>
      {/*<AppHelmet video={playingVideo}/>*/}
      <Grid container justify="center" spacing={16}>
        <Grid item>
          <VideoCardPlaying video={playingVideo} />
        </Grid>
      </Grid>
      <Grid container justify="center" direction="row">
        <Link href="/">
          <a>
            <Button variant="extendedFab" className={classes.button}>
              HOME
            </Button>
          </a>
        </Link>
      </Grid>
    </React.Fragment>
  )
}

VideoPlayerTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  videos: PropTypes.array.isRequired,
}

export default withStyles(styles)(VideoPlayerTemplate)

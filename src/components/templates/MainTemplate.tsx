import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid/Grid'
import TitleBar from '../organisms/TitleBar'
import LabelBottomNavigation from '../organisms/LabelBottomNavigation'
import { channelId } from '../const'
import VideoList from '../pages/VideoList'
import { useRouter } from 'next/router'

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
  const router = useRouter()

  const { classes, videos, newVideos } = props

  const main = []
  const MV = []
  const battle = []
  const interview = []
  const otheres = []

  // ジャンルごとに動画を振り分ける。振り分けた動画をVideoListに渡す
  videos.map((video) => {
    switch (video.genre) {
      case 'MV':
        MV.push(video)
        break
      case 'battle':
        battle.push(video)
        break
      case 'interview':
        interview.push(video)
        break
      case 'others':
        otheres.push(video)
        break
      default:
        break
    }
  })

  newVideos.map((video) => {
    if (video.channelId !== channelId.neetTokyo) {
      main.push(video)
    }
  })

  const map = {
    '/': main,
    '/music_video': MV,
    '/battle': battle,
    '/interview': interview,
    '/others': otheres,
  }

  const pathToVideo = () => {
    const videos = map[router.pathname]
    return typeof videos === 'undefined' ? main : videos
  }

  return (
    <div className={classes.root}>
      <TitleBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <VideoList videos={pathToVideo()} />
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

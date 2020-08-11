import React from 'react'
import VideoCard from '../VideoCard/VideoCard'
import VideoListTemplate from '../templates/VideoListTemplate'
import { Videos } from '../../types/Video'
import { WithStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button/Button'
import Grid from '@material-ui/core/Grid/Grid'
import { withStyles } from '@material-ui/core/styles'
import useLoadMore from '../../hooks/useLoadMore'

const defaultCount = parseInt(process.env.NEXT_PUBLIC_DISPLAY_VIDEOS_DEFAULT_COUNT, 10)

interface Props extends WithStyles<typeof styles> {
  hasMoreVideos: boolean
  handleClick: () => void
  defaultCount: number
  videos: Videos
}

const Component: React.FC<Props> = (props) => (
  <VideoListTemplate
    items={props.videos.map((video, i) => (
      <VideoCard key={i} video={video} />
    ))}
    loadMoreButton={
      props.hasMoreVideos ? (
        <Grid container justify="center" direction="row">
          <Button
            variant="contained"
            color="primary"
            aria-label="Load"
            className={props.classes.button}
            onClick={props.handleClick}
          >
            次の{props.defaultCount}件を表示
          </Button>
        </Grid>
      ) : (
        <div className={props.classes.bottom} />
      )
    }
  />
)

interface ContainerProps extends WithStyles<typeof styles> {
  videos: Videos
}

const Container: React.FC<ContainerProps> = (props) => {
  const hooks = useLoadMore(props.videos.length, defaultCount)
  const videos = props.videos.slice(0, hooks.loadedVideosCount)

  return (
    <Component
      classes={props.classes}
      videos={videos}
      handleClick={hooks.loadMore}
      hasMoreVideos={hooks.hasMoreVideos}
      defaultCount={defaultCount}
    />
  )
}

const styles = {
  button: {
    padding: '12px 24px',
    marginTop: 44,
    marginBottom: 44,
  },
  bottom: {
    height: 66,
  },
}

Container.displayName = 'VideoList'

export default withStyles(styles)(Container)

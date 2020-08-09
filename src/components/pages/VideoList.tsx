import React, { useState } from 'react'
import VideoCard from '../organisms/VideoCard'
import VideoListTemplate from '../templates/VideoListTemplate'
import { Videos } from '../../types/Video'
import { WithStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button/Button'
import Grid from '@material-ui/core/Grid/Grid'
import { withStyles } from '@material-ui/core/styles'

interface Props extends WithStyles<typeof styles> {
  items: React.FC[]
  hasMoreVideos: boolean
  handleClick: () => void
}

const Component: React.FC<Props> = (props) => (
  <VideoListTemplate
    items={props.items}
    loadMoreButton={
      props.hasMoreVideos ? (
        <Grid container justify="center" direction="row">
          <Button variant="outlined" aria-label="Load" className={props.classes.button} onClick={props.handleClick}>
            次の20件を表示
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
  // TODO Custom Hooksで切り出す
  const [{ hasMoreVideos, loadedVideosCount }, setState] = useState(() => ({
    hasMoreVideos: true,
    loadedVideosCount: 20,
  }))

  const items = []

  for (let i = 0; i < loadedVideosCount; i++) {
    items.push(<VideoCard key={i} video={props.videos[i]} />)
  }

  const loadVideos = () => {
    const max = props.videos.length

    loadedVideosCount + 20 < max
      ? setState((prev) => ({
          loadedVideosCount: prev.loadedVideosCount + 20,
          ...prev,
        }))
      : setState({
          hasMoreVideos: false,
          loadedVideosCount: max,
        })
  }

  return <Component classes={props.classes} items={items} handleClick={loadVideos} hasMoreVideos={hasMoreVideos} />
}

const styles = {
  button: {
    marginTop: 12,
    marginBottom: 44,
  },
  bottom: {
    height: 66,
  },
}

Container.displayName = 'VideoList'

export default withStyles(styles)(Container)

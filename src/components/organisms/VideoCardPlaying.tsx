import React from 'react'
import Card from '@material-ui/core/Card'
import ResponsiveIframe from '../atoms/ResponsiveIframe'
import { CONST } from '../const'
import CardContent from '@material-ui/core/CardContent/CardContent'
import Typography from '@material-ui/core/Typography/Typography'
import { Video } from '../../types/Video'
import CardActions from '@material-ui/core/CardActions/CardActions'
import { TwitterShareButton } from 'react-share'
import { withStyles } from '@material-ui/core'
import { createStyles, WithStyles } from '@material-ui/styles'

interface Props extends WithStyles<typeof styles> {
  video: Video
}

const Component: React.FC<Props> = (props) => (
  <div className={props.classes.root}>
    <Card className={props.classes.card}>
      <ResponsiveIframe src={CONST.youtubeEnbedUrl + props.video.hash} />

      <CardContent className={props.classes.cardContent}>
        <Typography gutterBottom variant="h2">
          {props.video.title}
        </Typography>
      </CardContent>

      <CardActions className={props.classes.action}>
        <div>
          <div>
            <Typography variant="caption" className={props.classes.channelTitle}>
              {props.video.channelTitle}
            </Typography>
            <Typography variant="caption">{props.video.publishedAt}</Typography>
          </div>
        </div>
        <div className={props.classes.twitter}>
          <div className={props.classes.icon}>
            <TwitterShareButton
              title={`「${props.video.title}」`}
              hashtags={['日本語ラップ', 'HIPHOP']}
              url={CONST.videoUrl + '/' + props.video.hash}
            >
              <i className="fab fa-twitter fa-lg" style={{ color: '#1da1f2' }} />
            </TwitterShareButton>
          </div>
        </div>
      </CardActions>
    </Card>
  </div>
)

const styles = () =>
  createStyles({
    root: {
      display: 'block',
      textAlign: 'center',
    },
    card: {
      maxWidth: 640,
      width: '100%',
      justifyContent: 'center',
    },
    cardContent: {
      paddingTop: 8,
      paddingBottom: 4,
      paddingLeft: 12,
      paddingRight: 12,
    },
    action: {
      paddingTop: 0,
      paddingRight: 10,
      paddingLeft: 10,
      display: 'flex',
      alignItems: 'center',
    },
    channelTitle: {
      textAlign: 'left',
    },
    twitter: {
      marginLeft: 'auto',
      paddingRight: 8,
    },
    icon: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  })

Component.displayName = 'VideoCardPlaying'

export default withStyles(styles)(Component)

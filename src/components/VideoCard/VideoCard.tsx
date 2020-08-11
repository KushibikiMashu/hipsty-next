import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid/Grid'
import Card from '@material-ui/core/Card/Card'
import Link from 'next/link'
import CardMedia from '@material-ui/core/CardMedia/CardMedia'
import { WithStyles } from '@material-ui/styles'
import CardContent from '@material-ui/core/CardContent/CardContent'
import Typography from '@material-ui/core/Typography/Typography'
import CardActions from '@material-ui/core/CardActions/CardActions'
import TwitterIcon from '../TwitterIcon/TwitterIcon'
import { Video } from 'src/types/Video'
import { genreToSlug } from '../../presenters/VideoPresenter'

interface Props extends WithStyles<typeof styles> {
  video: Video
  slug: string
  shortTitle: string
}

const Component: React.FC<Props> = (props) => (
  <Grid item>
    <Card className={props.classes.card}>
      <Link href={'/videos/[slug]/[hash]'} as={`/videos/${props.slug}/${props.video.hash}`}>
        <a>
          <CardMedia className={props.classes.media} image={props.video.thumbnail} title={props.video.hash} />
        </a>
      </Link>

      <CardContent className={props.classes.cardContent}>
        <Typography gutterBottom variant="subtitle1">
          {props.shortTitle}
        </Typography>
      </CardContent>

      <CardActions className={props.classes.root}>
        <div>
          <div>
            <Typography variant="caption">{props.video.channelTitle}</Typography>
            <Typography variant="caption">{props.video.publishedAt}</Typography>
          </div>
        </div>
        <div className={props.classes.twitter}>
          <TwitterIcon title={props.video.title} hash={props.video.hash} />
        </div>
      </CardActions>
    </Card>
  </Grid>
)

const styles = {
  card: {
    maxWidth: 260,
  },
  media: {
    height: 0,
    width: 260,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    paddingTop: 8,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12,
  },
  root: {
    paddingTop: 0,
    paddingRight: 10,
    paddingLeft: 10,
    display: 'flex',
    alignItems: 'center',
  },
  twitter: {
    marginLeft: 'auto',
    paddingRight: 8,
  },
}

interface ContainerProps extends WithStyles<typeof styles> {
  video: Video
}

const Container: React.FC<ContainerProps> = (props) => {
  const slug = genreToSlug(props.video.genre)
  const shortTitle = `${props.video.title.slice(0, 36)}...`

  return <Component {...props} slug={slug} shortTitle={shortTitle} />
}

export default withStyles(styles)(Container)

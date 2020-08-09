import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia/CardMedia'
import Link from 'next/link'

const styles = {
  media: {
    height: 0,
    width: 260,
    paddingTop: '56.25%', // 16:9
  },
}

function CustomCardMedia(props) {
  const { classes, hash, thumbnail } = props
  const videoPlayer = '/video/' + hash
  return (
    <Link href={videoPlayer}>
      <CardMedia className={classes.media} image={thumbnail} title={hash} />
    </Link>
  )
}

CustomCardMedia.propTypes = {
  classes: PropTypes.object.isRequired,
  hash: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
}

export default withStyles(styles)(CustomCardMedia)

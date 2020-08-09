import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid/Grid'
import Card from '@material-ui/core/Card/Card'
import CustomCardMedia from '../atoms/CustomCardMedia'
import CustomCardContent from '../molecules/CustomCardContent'
import CustomCardActions from '../molecules/CustomCardActions'

const styles = {
  card: {
    maxWidth: 260,
  },
}

function VideoCard(props) {
  const { classes, video } = props
  return (
    <Grid item>
      <Card className={classes.card}>
        <CustomCardMedia hash={video.hash} thumbnail={video.thumbnail} />
        <CustomCardContent title={video.shortTitle} />
        <CustomCardActions video={video} />
      </Card>
    </Grid>
  )
}

VideoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  video: PropTypes.object.isRequired,
}

export default withStyles(styles)(VideoCard)

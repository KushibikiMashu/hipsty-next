import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid/Grid'
import Card from '@material-ui/core/Card/Card'
import CardMedia from '@material-ui/core/CardMedia/CardMedia'
import CardContent from '@material-ui/core/CardContent/CardContent'
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress'
import CardActions from '@material-ui/core/CardActions/CardActions'

const styles = {
  card: {
    maxWidth: 260,
  },
  media: {
    height: 0,
    width: 260,
    backgroundColor: '#E0E0E0',
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    height: 80,
    paddingTop: 8,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12,
  },
  progressLong: {
    height: 16,
    width: 140,
    marginLeft: 8,
    marginTop: 12,
    borderRadius: 20,
    backgroundColor: '#BDBDBD',
  },
  progressShort: {
    height: 16,
    width: 100,
    marginLeft: 8,
    marginTop: 12,
    borderRadius: 20,
    backgroundColor: '#BDBDBD',
  },
}

function VideoCardDummy(props) {
  const { classes } = props
  return (
    <Grid item>
      <Card className={classes.card}>
        <CardMedia className={classes.media} src="" />
        <CardContent className={classes.cardContent}>
          <LinearProgress className={classes.progressLong} />
          <LinearProgress className={classes.progressShort} />
        </CardContent>
        <CardActions />
      </Card>
    </Grid>
  )
}

VideoCardDummy.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VideoCardDummy)

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent/CardContent'
import Typography from '@material-ui/core/Typography/Typography'

const styles = {
  cardContent: {
    paddingTop: 8,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12,
  },
}

function CustomCardContent(props) {
  const { classes, title } = props
  return (
    <CardContent className={classes.cardContent}>
      <Typography gutterBottom variant="subheading">
        {title}
      </Typography>
    </CardContent>
  )
}

CustomCardContent.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default withStyles(styles)(CustomCardContent)

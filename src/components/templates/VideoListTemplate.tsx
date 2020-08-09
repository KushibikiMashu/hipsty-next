import React, { ReactElement } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid/Grid'
import { WithStyles } from '@material-ui/styles'

interface Props extends WithStyles<typeof styles> {
  items: React.FC[]
  loadMoreButton: React.FC | ReactElement
}

const Component: React.FC<Props> = (props) => (
  <div className={props.classes.flex}>
    <Grid container justify="center" direction="row" spacing={6}>
      {props.items}
    </Grid>
    {props.loadMoreButton}
  </div>
)

const styles = {
  flex: {
    flexGrow: 1,
  },
}

export default withStyles(styles)(Component)

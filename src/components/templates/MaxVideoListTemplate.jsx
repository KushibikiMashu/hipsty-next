import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid/Grid'

const styles = {
    flex: {
        flexGrow: 1
    },
    bottom: {
        height: 66
    }
}

function MaxVideoListTemplate(props) {
    const { classes, videos } = props
    return (
        <div className={classes.flex}>
            <Grid container justify="center" direction="row" spacing={16}>
                {videos}
            </Grid>
            <div className={classes.bottom} />
        </div>
    )
}

MaxVideoListTemplate.propTypes = {
    classes: PropTypes.object.isRequired,
    videos: PropTypes.array.isRequired
}

export default withStyles(styles)(MaxVideoListTemplate)

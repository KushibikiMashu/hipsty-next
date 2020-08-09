import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid/Grid'
import Button from '@material-ui/core/Button/Button'

const styles = {
    flex: {
        flexGrow: 1
    },
    button: {
        marginTop: 12,
        marginBottom: 44
    }
}

function VideoListTemplate(props) {
    const { classes, videos, onClick } = props
    return (
        <div className={classes.flex}>
            <Grid container justify="center" direction="row" spacing={16}>
                {videos}
            </Grid>
            <Grid container justify="center" direction="row">
                <Button
                    variant="extendedFab"
                    aria-label="Load"
                    className={classes.button}
                    onClick={onClick}
                >
                    次の20件を表示
                </Button>
            </Grid>
        </div>
    )
}

VideoListTemplate.propTypes = {
    classes: PropTypes.object.isRequired,
    videos: PropTypes.array.isRequired,
    onClick: PropTypes.func
}

export default withStyles(styles)(VideoListTemplate)

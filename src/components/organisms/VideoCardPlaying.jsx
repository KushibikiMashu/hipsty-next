import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import ResponsiveIframe from '../atoms/ResponsiveIframe'
import CustomCardContent from '../molecules/CustomCardContent'
import CustomCardActionsPlaying from '../molecules/CustomCardActionsPlaying'
import { CONST } from '../const'

const styles = {
    root: {
        display: 'block',
        textAlign: 'center'
    },
    card: {
        maxWidth: 640,
        width: '100%',
        justifyContent: 'center'
    }
}

function VideoCardPlaying(props) {
    const { classes, video } = props
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <ResponsiveIframe src={CONST.youtubeEnbedUrl + video.hash} />
                <CustomCardContent title={video.title} />
                <CustomCardActionsPlaying video={video} />
            </Card>
        </div>
    )
}

VideoCardPlaying.propTypes = {
    classes: PropTypes.object.isRequired,
    video: PropTypes.object.isRequired
}

export default withStyles(styles)(VideoCardPlaying)

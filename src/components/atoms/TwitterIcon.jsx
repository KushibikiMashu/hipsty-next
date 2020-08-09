import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { TwitterShareButton } from 'react-share'
import { CONST } from '../const'

const styles = {
    icon: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
}

function TwitterIcon(props) {
    const { classes, video } = props
    return (
        <div className={classes.icon}>
            <TwitterShareButton
                title={`「${video.title}」`}
                hashtags={['日本語ラップ', 'HIPHOP']}
                url={CONST.videoUrl + '/' + video.hash}
            >
                <i
                    className="fab fa-twitter fa-lg"
                    style={{ color: '#1da1f2' }}
                />
            </TwitterShareButton>
        </div>
    )
}

TwitterIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    video: PropTypes.object.isRequired
}

export default withStyles(styles)(TwitterIcon)

// <div>Logo made with <a href="https://www.designevo.com/en/" title="Free Online Logo Maker">DesignEvo</a></div>

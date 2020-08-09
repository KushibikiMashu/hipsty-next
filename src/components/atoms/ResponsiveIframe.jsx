import React from 'react'
import PropTypes from 'prop-types'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'

function ResponsiveIframe(props) {
    const { src, width } = props
    const isSmallScreen = /xs/.test(width)
    //  https://codesandbox.io/s/l0x8kqz7q?module=%2Fdemo.js
    const ifremeProps = {
        size: isSmallScreen ? 'small' : 'large',
        width: isSmallScreen ? '100%' : 640,
        height: isSmallScreen ? 280 : 460
    }
    if (isWidthUp('sm', width)) {
        return (
            <iframe
                src={src}
                {...ifremeProps}
                frameBorder="0"
                allow="autoplay encrypted-media"
                allowFullScreen
            />
        )
    }
    return (
        <iframe
            src={src}
            {...ifremeProps}
            frameBorder="0"
            allow="autoplay encrypted-media"
            allowFullScreen
        />
    )
}

ResponsiveIframe.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
}

export default withWidth()(ResponsiveIframe)

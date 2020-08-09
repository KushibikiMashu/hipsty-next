import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import FiberNewIcon from '@material-ui/icons/FiberNew'
import MusicVideoIcon from '@material-ui/icons/MusicVideo'
import NewReleasesIcon from '@material-ui/icons/NewReleases'
import PersonIcon from '@material-ui/icons/Person'
import LiveTvIcon from '@material-ui/icons/LiveTv'

const styles = {
    root: {
        width: '100%',
        textAlign: 'center'
    }
}

function LabelBottomNavigationDummy(props) {
    const { classes } = props
    return (
        <BottomNavigation className={classes.root}>
            <BottomNavigationAction icon={<FiberNewIcon />} />
            <BottomNavigationAction icon={<MusicVideoIcon />} />
            <BottomNavigationAction icon={<NewReleasesIcon />} />
            <BottomNavigationAction icon={<PersonIcon />} />
            <BottomNavigationAction icon={<LiveTvIcon />} />
        </BottomNavigation>
    )
}

LabelBottomNavigationDummy.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LabelBottomNavigationDummy)

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
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
    },
    labelBottomNavigation: {
        bottom: 0,
        position: 'fixed'
    }
}

class LabelBottomNavigation extends React.Component {
    state = {
        value: location.pathname.split('/')[1]
            ? location.pathname.split('/')[1]
            : 'new'
    }

    handleChange = (event, value) => {
        this.setState({ value })
    }

    render() {
        const { classes } = this.props
        const { value } = this.state
        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                className={classes.root}
            >
                <BottomNavigationAction
                    label="New"
                    value="new"
                    component={Link}
                    to="/"
                    icon={<FiberNewIcon />}
                />
                <BottomNavigationAction
                    label="MV"
                    value="music_video"
                    component={Link}
                    to="/music_video"
                    icon={<MusicVideoIcon />}
                />
                <BottomNavigationAction
                    label="Battle"
                    value="battle"
                    component={Link}
                    to="/battle"
                    icon={<NewReleasesIcon />}
                />
                <BottomNavigationAction
                    label="Interview"
                    value="interview"
                    component={Link}
                    to="/interview"
                    icon={<PersonIcon />}
                />
                <BottomNavigationAction
                    label="Others"
                    value="others"
                    component={Link}
                    to="/others"
                    icon={<LiveTvIcon />}
                />
            </BottomNavigation>
        )
    }
}

LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LabelBottomNavigation)

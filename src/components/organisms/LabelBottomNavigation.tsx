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
import Link from 'next/link'

const styles = {
  root: {
    width: '100%',
    textAlign: 'center',
  },
  labelBottomNavigation: {
    bottom: 0,
    position: 'fixed',
  },
}

class LabelBottomNavigation extends React.Component {
  state = {
    value: typeof window !== 'undefined' && location.pathname.split('/')[1] ? location.pathname.split('/')[1] : 'new',
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state
    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <Link href="/">
          <a>
            <BottomNavigationAction label="New" value="new" icon={<FiberNewIcon />} />
          </a>
        </Link>
        <Link href="/music_video">
          <a>
            <BottomNavigationAction label="MV" value="music_video" icon={<MusicVideoIcon />} />
          </a>
        </Link>
        <Link href="/battle">
          <a>
            <BottomNavigationAction label="Battle" value="battle" icon={<NewReleasesIcon />} />
          </a>
        </Link>
        <Link href="/interview">
          <a>
            <BottomNavigationAction label="Interview" value="interview" icon={<PersonIcon />} />
          </a>
        </Link>
        <Link href="/others">
          <a>
            <BottomNavigationAction label="Others" value="others" icon={<LiveTvIcon />} />
          </a>
        </Link>
      </BottomNavigation>
    )
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LabelBottomNavigation)

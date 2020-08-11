import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import FiberNewIcon from '@material-ui/icons/FiberNew'
import MusicVideoIcon from '@material-ui/icons/MusicVideo'
import NewReleasesIcon from '@material-ui/icons/NewReleases'
import PersonIcon from '@material-ui/icons/Person'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles'
import { createStyles, WithStyles } from '@material-ui/styles'

type Props = WithStyles<typeof styles>

const Component: React.FC<Props> = (props) => (
  <BottomNavigation className={props.classes.root}>
    <Link href="/">
      <a>
        <BottomNavigationAction label="New" icon={<FiberNewIcon />} />
      </a>
    </Link>
    <Link href="/videos/music-videos">
      <a>
        <BottomNavigationAction label="MV" icon={<MusicVideoIcon />} />
      </a>
    </Link>
    <Link href="/videos/battles">
      <a>
        <BottomNavigationAction label="Battle" icon={<NewReleasesIcon />} />
      </a>
    </Link>
    <Link href="/videos/interviews">
      <a>
        <BottomNavigationAction label="Interview" icon={<PersonIcon />} />
      </a>
    </Link>
    <Link href="/videos/others">
      <a>
        <BottomNavigationAction label="Others" icon={<LiveTvIcon />} />
      </a>
    </Link>
  </BottomNavigation>
)

const styles = createStyles({
  root: {
    width: '100%',
    textAlign: 'center',
  },
})

export default withStyles(styles)(Component)

import React, { ReactElement } from 'react'
import FiberNewIcon from '@material-ui/icons/FiberNew'
import MusicVideoIcon from '@material-ui/icons/MusicVideo'
import NewReleasesIcon from '@material-ui/icons/NewReleases'
import PersonIcon from '@material-ui/icons/Person'
import LiveTvIcon from '@material-ui/icons/LiveTv'

export type NavigationButtons = {
  path: string
  as: string
  label: string
  icon: ReactElement
}[]

export const getButtons = () => [
  {
    path: '/',
    as: '/',
    label: 'New',
    icon: <FiberNewIcon />,
  },
  {
    path: '/videos/[slug]',
    as: '/videos/music-videos',
    label: 'music-video',
    icon: <MusicVideoIcon />,
  },
  {
    path: '/videos/[slug]',
    as: '/videos/battles',
    label: 'battle',
    icon: <NewReleasesIcon />,
  },
  {
    path: '/videos/[slug]',
    as: '/videos/interviews',
    label: 'interview',
    icon: <PersonIcon />,
  },
  {
    path: '/videos/[slug]',
    as: '/videos/others',
    label: 'others',
    icon: <LiveTvIcon />,
  },
]

import React from 'react'
import { TwitterShareButton } from 'react-share'
import { withStyles } from '@material-ui/core'
import { WithStyles } from '@material-ui/styles'

interface Props extends WithStyles<typeof styles> {
  title: string
  hash: string
}

const Component: React.FC<Props> = (props) => (
  <div className={props.classes.icon}>
    <TwitterShareButton title={`「${props.title}」`} hashtags={['日本語ラップ', 'HIPHOP']} url={'/video/' + props.hash}>
      <i className="fab fa-twitter fa-lg" style={{ color: '#1da1f2' }} />
    </TwitterShareButton>
  </div>
)

const styles = {
  icon: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}

Component.displayName = 'TwitterIcon'

export default withStyles(styles)(Component)

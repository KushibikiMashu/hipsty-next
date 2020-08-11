import React from 'react'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles'
import { createStyles, WithStyles } from '@material-ui/styles'
import { getButtons, NavigationButtons } from './buttons'

interface Props extends WithStyles<typeof styles> {
  buttons: NavigationButtons
}

const Component: React.FC<Props> = (props) => (
  <div className={props.classes.root}>
    {props.buttons.map((button, i) => (
      <Link href={button.path} as={button.as} key={i}>
        <a>
          <BottomNavigationAction label={button.label} icon={button.icon} />
        </a>
      </Link>
    ))}
  </div>
)

const styles = createStyles({
  root: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#FFF',
  },
})

type ContainerProps = WithStyles<typeof styles>

const Container: React.FC<ContainerProps> = (props) => {
  const buttons = getButtons()

  return <Component classes={props.classes} buttons={buttons} />
}

Container.displayName = 'BottomNavigation'

export default withStyles(styles)(Container)

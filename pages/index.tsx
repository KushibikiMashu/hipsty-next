import React from 'react'
import App from '../src/components/pages/App'

type Props = unknown

const Component: React.FC<Props> = () => <App />

type ContainerProps = unknown

const Container: React.FC<ContainerProps> = () => {
  return <Component />
}

Container.displayName = 'IndexPage'

export default Container

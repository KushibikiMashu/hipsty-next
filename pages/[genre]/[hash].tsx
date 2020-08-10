import React from 'react'
import { NextPage } from 'next'

type Props = unknown

const Component: React.FC<Props> = () => <>aaa</>

type ContainerProps = unknown

const Container: NextPage<ContainerProps> = () => {
  return <Component />
}

// const getStaticPaths: GetStaticPaths = async () => {
//   return { props: {} }
// }

Container.displayName = 'VideoPlayerPage'

export default Container

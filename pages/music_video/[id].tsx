import VideoPlayerTemplate from '../../src/components/templates/VideoPlayerTemplate'

type Props = unknown

const Component: React.FC<Props> = () => <VideoPlayerTemplate videos={[]} />

type ContainerProps = unknown

const Container: React.FC<ContainerProps> = () => {
  return <Component />
}

Container.displayName = 'VideoPage/idPage'

export default Container

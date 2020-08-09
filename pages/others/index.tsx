type Props = unknown

const Component: React.FC<Props> = () => <div>a</div>

type ContainerProps = unknown

const Container: React.FC<ContainerProps> = () => {
  return <Component />
}

Container.displayName = 'OthersPage'

export default Container

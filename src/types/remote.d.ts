declare module "remoteApp/RemoteComponent" {
  interface RemoteComponentProps {
    standalone?: boolean;
  }

  const RemoteComponent: React.ComponentType<RemoteComponentProps>;
  export default RemoteComponent;
}

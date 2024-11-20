type ServerComponentWithChildrenProps = {
  children: React.ReactNode;
};

const ServerComponentWithChildren: React.FC<ServerComponentWithChildrenProps> = ({ children }) => {
  console.log('Server Rendering~: with children');

  return (
    <>
      <div>this is Server Component: with children</div>
      {children}
    </>
  );
};

export default ServerComponentWithChildren;

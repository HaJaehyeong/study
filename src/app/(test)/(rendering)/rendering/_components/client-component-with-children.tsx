'use client';
type ClientComponentWithChildrenProps = {
  children: React.ReactNode;
};

const ClientComponentWithChildren: React.FC<ClientComponentWithChildrenProps> = ({ children }) => {
  console.log('Client Rendering!: with children');

  return (
    <>
      <div>this is Client Component: with children</div>
      {children}
    </>
  );
};

export default ClientComponentWithChildren;

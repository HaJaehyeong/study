import ClientComponentWithChildren from './client-component-with-children';
import ServerComponent from './server-component';

const ContainerComponent: React.FC = () => {
  console.log('Container!');

  return (
    <ClientComponentWithChildren>
      <ServerComponent />
    </ClientComponentWithChildren>
  );
};

export default ContainerComponent;

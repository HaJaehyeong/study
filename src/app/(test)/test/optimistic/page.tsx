import Thread from './_components/thread';

const OptimisticPage: React.FC = () => {
  return (
    <Thread
      messages={[{ message: 'h' }, { message: 'e' }, { message: 'l' }, { message: 'l' }, { message: 'o' }]}
    ></Thread>
  );
};

export default OptimisticPage;

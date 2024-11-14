type LangLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const LangLayout: React.FC<LangLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <div style={{ position: 'absolute', bottom: '0' }}>Lang Layout!!</div>
    </>
  );
};

export default LangLayout;

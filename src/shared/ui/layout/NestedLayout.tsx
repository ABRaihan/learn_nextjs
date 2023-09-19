type NestedLayoutProps = {
  children: React.ReactNode;
};
const NestedLayout = ({ children }: NestedLayoutProps) => {
  return (
    <>
      <h1>Nested Layout</h1>
      {children}
    </>
  );
};
export default NestedLayout;

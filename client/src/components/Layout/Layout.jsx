const Layout = ({ children, className = '' }) => (
  <>
    <main className={`flex flex-col ${className}`}>{children}</main>
  </>
);

export default Layout;

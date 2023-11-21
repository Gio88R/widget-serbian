import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>This is a test.</title>
      </Head>
      {children}
    </div>
  );
};

export default Layout;

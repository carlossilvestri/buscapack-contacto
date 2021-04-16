import React, { Fragment } from "react";
import Head from "next/head";


const Layout = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Buscapck - Contacto</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Bootstrap 3 --> */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        {/* <!-- Animate CSS--> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        {/* <!-- Fuente Poppins --> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Fuente Nunito --> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Header /> */}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;

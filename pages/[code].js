import React, { Fragment } from "react";
// import styles from "../styles/Home.module.scss";
import Layout from "../components/layout/Layout";
import FooterTag from "../components/layout/FooterTag";
import Modal1 from "../components/componentes/Modal1";

export default function DynamicCode() {
  return (
    <Fragment>
      <Layout>
        <div>
            <Modal1/>
        </div>
        <FooterTag/>
      </Layout>
    </Fragment>
  );
}

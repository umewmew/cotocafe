import React from "react";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import Main from "../Main/Main";
import styles from "./PageWrapper.module.scss";


function PageWrapper() {
  return (
    <>
      <Header />
      <main className={styles.page_wrapper_main}>
      <Main />
      </main>
      <Footer />
    </>
  );
}


export default PageWrapper;
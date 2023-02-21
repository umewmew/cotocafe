import React from "react";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import Main from "../Main/Main";
import styles from "./PageWrapper.module.scss";
import clsx from "clsx";


function PageWrapper() {
  return (
    <>
      <Header />
      <main className={clsx(styles.page_wrapper)}>
      <Main />
      </main>
      <Footer />
    </>
  );
}


export default PageWrapper;
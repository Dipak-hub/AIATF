import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Donate from "../../components/Donate";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";

const DonatePage = () => {
  return (
    <Fragment>
      <Navbar />
      <PageTitle
        pageTitle={"Registration"}
        pagesub={"Register to get a entry pass"}
      />
      <Donate />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default DonatePage;

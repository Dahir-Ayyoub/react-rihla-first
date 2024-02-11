import React from "react";

import Search from "../../components/searchbar/searchbar";
import Nav from "../../components/nav/nav";
import Recommendation from "../../components/recommendation/recommendation";
import Footer from "../../components/footer/footer";
import Rec2 from "../../components/recommendation-v2/rec";


export default class UniverstyList extends React.Component {
  render() {
    return (
      <>
        {/* <Nav /> */}
        {/* <Search /> */}
        {/* <Recommendation /> */}
        <Rec2 />
        <Footer />
      </>
    );
  }
}

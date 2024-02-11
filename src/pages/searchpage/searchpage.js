import React from "react";
import Nav from "../../components/nav/nav";
import SearchBar from "./bar-search/bar-search";
import TypeEcole from "./type/type";
import SearchResults from "./search-result/search-results";
import Footer from "../../components/footer/footer";

export default class SearchPage extends React.Component{

    render(){

        return(
            <>
                {/* <Nav /> */}
                <SearchBar />
                <TypeEcole />
                <SearchResults />
                <Footer />
            </>
        )
    }
}
import React from "react";
import Bookmark from "./bookmark";
import Footer from "../../components/footer/footer";

export default class Bookmarks extends React.Component{

    render(){
        return(
            <>
                <Bookmark />
                <Footer />
            </>
        )
    }
}
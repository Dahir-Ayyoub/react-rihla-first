import React, { Component } from "react";
// import './bar-search.css'
export default class SearchBar extends Component {
  render() {
    return (
      <div className="my-3 d-flex align-items-center">
        <div className="input-group-prepend">
          
            <i className="fa-solid fa-arrow-left mx-2"></i>
          
        </div>
        <div className="input-group  mx-3 w-100">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search..."
            aria-label="Search..."
          />
        </div>
      </div>
    );
  }
}

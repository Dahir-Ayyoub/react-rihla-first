import React, { Component } from 'react';
import './searchbar.css'
export default class Search extends Component {
  render() {
    return (
      <div className="my-3">
        <div className="input-group mb-3 mx-3">
          <div className="input-group-prepend search" >
            <input type="text" className="form-control form-control-lg" placeholder="Search..." aria-label="Search..."/>
          </div>
          <div className="input-group-append searchicon" >
            <a href="search.html">
              <button className="btn btn-lg">
                <i className="fa-solid fa-search icon"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}



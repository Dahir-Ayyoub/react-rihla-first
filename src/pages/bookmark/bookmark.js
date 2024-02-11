import React, { Component } from 'react';
import './bookmark.css'

export default class Bookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [
        {
          id: 1,
          title: 'UM6P',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
          link: '#',
          imageSrc: '../images/IMG6.jpg',
        },
        {
            id: 2,
            title: 'UM6P',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            link: '#',
            imageSrc: '../images/IMG6.jpg',
          },
          {
            id: 3,
            title: 'UM6P',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
            link: '#',
            imageSrc: '../images/IMG6.jpg',
          },
        // Add more bookmark data as needed
      ],
    };
  }

  render() {
    return (
      <div className="container-fluid my-2">
        <button className="btn btn-light btn-lg">
          <i className="fa-solid fa-arrow-left fa-2xl" style={{ color: '#ef9b11' }} />
        </button>
        <h1 className="my-2 text-center">Bookmarks</h1>
        <div className="line-title" />

        {/* Mapping over the bookmarks array */}
        {this.state.bookmarks.map((bookmark, index) => (
          // Use index to create unique keys for rows
          <div className="row my-2" key={`row-${index}`}>
            <div className="col-6">
              <div className="image">
                <img src={bookmark.imageSrc} alt={bookmark.title} />
              </div>
              <div className="info">
                <h4>{bookmark.title}</h4>
                <p>
                  {bookmark.description}
                  <a href={bookmark.link}>Lire Plus</a>
                </p>
              </div>
            </div>
            {/* Add more columns as needed */}
            {this.state.bookmarks.length > index + 1 && (
              <div className="col-6">
                <div className="image">
                  <img src={this.state.bookmarks[index + 1].imageSrc} alt={this.state.bookmarks[index + 1].title} />
                </div>
                <div className="info">
                  <h4>{this.state.bookmarks[index + 1].title}</h4>
                  <p>
                    {this.state.bookmarks[index + 1].description}
                    <a href={this.state.bookmarks[index + 1].link}>Lire Plus</a>
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}


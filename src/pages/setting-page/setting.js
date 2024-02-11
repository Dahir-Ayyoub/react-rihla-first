import React, { Component } from 'react';
import './setting.css'; 

export default class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: null,
    };
  }

  changeColor = (index) => {
    this.setState({ activeIndex: index });
  };

  render() {
    const items = [
      { icon: 'bx bxs-home', text: 'Home' },
      { icon: 'bx bxs-bookmark', text: 'Bookmarks' },
      { icon: 'bx bx-globe', text: 'Language' },
      { icon: 'bx bxs-user', text: 'Profile' },
      { icon: 'bx bxs-moon', text: 'Dark Mode' },
      { icon: 'bx bxs-exit', text: 'Log-out' },
    ];

    return (
      <div className="container-fluid my-2">
        <button className="btn btn-light btn-lg">
          <i className="fa-solid fa-arrow-left fa-xl" style={{ color: '#ef9b11' }} />
        </button>
        <h1 className="my-2 text-center">Settings</h1>
        <div className="line-title" />
        <div className="card my-5">
          <ul className="list-group list-group-flush">
            {items.map((item, index) => (
              <li
                key={index}
                className={`list-group-item ${this.state.activeIndex === index ? 'active' : ''}`}
                onClick={() => this.changeColor(index)}
              >
                <i className={item.icon} />
                <span className="mx-4">{item.text}</span>
              </li>
              
            ))}
          </ul>
        </div>
      </div>
    );
  }
}



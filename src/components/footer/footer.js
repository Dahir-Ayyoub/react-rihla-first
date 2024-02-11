import React, { Component } from 'react';
import './footer.css'


export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0, 
    };
  }

  handleClick = (index) => {

    this.setState({ activeIndex: index });
  };

  render() {
    const icons = [
      { className: 'bx bxs-home', color: '#ef9b11', fontSize: 36 },
      { className: 'bx bx-search-alt-2', color: '#ef9b11', fontSize: 36 },
      { className: 'bx bxs-bookmark', color: '#ef9b11', fontSize: 36},
      { className: 'bx bxs-cog', color: '#ef9b11', fontSize: 36 },
    ];

    return (
      <footer className="icon-menu" id="nav-menu">
        <ul className="icon-list">
          {icons.map((icon, index) => (
            <li key={index}>
              <span  className={`icon-link ${this.state.activeIndex === index ? 'active' : ''}`}
                onClick={() => this.handleClick(index)}
              >
                <i style={{ color: icon.color, fontSize: icon.fontSize }} className={icon.className} />
                
              </span>
            </li>
          ))}
        </ul>
      </footer>
    );
  }
}



import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    const iconsData = [
      { id: 1, href: '#home', iconClass: 'fas fa-home fa-2x', text: 'Home' },
      { id: 2, href: '#bookmark', iconClass: 'fas fa-bookmark fa-2x', text: 'Bookmark' },
      { id: 3, href: '#search', iconClass: 'fas fa-cog fa-2x', text: 'Setting' },
      { id: 4, href: '#setting', iconClass: 'fas fa-bars fa-2x', text: 'Menu' },
    ];

    return (
      <nav className="nav--icons">
        <ul>
          {iconsData.map((icon) => (
            <li key={icon.id}>
              <a href={icon.href}>
                {/* <span>{icon.text}</span> */}
                <i className={icon.iconClass}></i>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;

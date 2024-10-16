'use client';

import { Link as ScrollLink } from 'react-scroll';

const links = [
  { name: 'home' },
  { name: 'about' },
  { name: 'journey' },
  { name: 'work' },
  { name: 'contact' },
];

const Nav = ({ containerStyle, listStyle, linkStyle, spy }) => {
  return (
    <nav className={containerStyle}>
      <ul className={listStyle}>
        {links.map((link, index) => (
          <ScrollLink
            spy={spy}
            key={index}
            activeClass="active"
            className={linkStyle}
            to={link.name}
            smooth
          >
            {link.name}
          </ScrollLink>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

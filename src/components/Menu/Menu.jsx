import React from "react";
import "./menu.scss";

function Menu({ items, menuOpen, setMenuOpen }) {
  return (
    <nav className={"nav " + (menuOpen && "nav--active")}>
      <ul className="nav__list">
        {items &&
          items.map((item, idx) => (
            <li key={`${item.name}_${idx}`} onClick={() => setMenuOpen(false)}>
              <a href={`#${item.link}`}>{item.link}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Menu;

import React from "react";

function Navbar() {
  return (
    <header>
      <nav>
        <h1>My book list</h1>
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

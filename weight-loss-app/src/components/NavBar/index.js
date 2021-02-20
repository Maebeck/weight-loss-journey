import React from 'react';

function Navbar () {
    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Log In</a>
      </li>
      <li class="nav-item">
          <a class="nav-link">Journal</a>
      </li>
      <li class="nav-item">
          <a class="nav-link">Recipes</a>
      </li>
    </ul>
  </div>
</nav>
    )
};

export default Navbar;
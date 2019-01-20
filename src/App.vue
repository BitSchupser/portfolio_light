<template>
  <div id="app">
    
    <!-- Portfolio Title or Branding -->
    <nav class="navbar navbar-light justify-content-center mytitle">
      <span class="navbar-brand mb-0 h1">Your Name</span>
    </nav >

    <!-- Navigation / Top Menu -->
    <nav class="navbar navbar-expand-lg navbar-light nav-bg nav-height sticky-top">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/articles" class="nav-link">Articles</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/gallery" class="nav-link">Gallery</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Page loading -->
    <router-view></router-view>

    <!-- Footer -->
    <ul class="nav justify-content-center">
      <li class="nav-item footer">
        <a class="nav-link footer-link" href="#">Impressum</a>
      </li>
      <li class="nav-item footer">
        <a class="nav-link footer-link" href="#">Datenschutz</a>
      </li>
      <li class="nav-item footer">
        &copy;2019 MyPortfolio
      </li>
    </ul>

  </div>

</template>


<style> /* Global App-Styles */

  body {
      color: #000;
      background-color: #e2e2e2;
      font-family: 'Open Sans', sans-serif;
      font-size: 1.2em;
  }

  .container {
    margin: 40px auto;
  }

  .mytitle {
    margin: 40px auto;
  }

  .h1 {
    font-size: 3.5em;
  }

  .nav-height {
    height: 100px;
  }

  .nav-bg {
    background-color: #fcfbf9;
  }

  .nav-item {
    margin: auto 40px;
    font-size: 1.2em;
  }

  .nav-item:hover {
    border-bottom: #f4bc61 2px solid;
    border-top: #f4bc61 2px solid;
  }

  .navbar-collapse {
    background-color: #fcfbf9;
  }

  .navbar-collapse .nav-item {
    line-height: 2em;
  }

  .footer {
    font-size: 0.8em;
    margin: 0 20px 40px 0;
    padding: 0;
    
  }

  .footer:hover {
    border-bottom: none;
    border-top: none;
  }

  .footer a {
    color: #000;
  }

  .footer a:hover {
    color: #f4bc61;
  }

  .footer-link {
    margin: 0;
    padding: 0;
  }

</style>

<template>
  <div id="app">
    
    <!-- Portfolio Title or Branding -->
    <nav class="navbar navbar-light justify-content-center mytitle">
      <span class="navbar-brand mb-0 h1">Your Name</span>
    </nav >

    <!-- Navigation / Top Menu -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light nav-height">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Articles</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Default index-Page -->
    <About />

    <!-- Footer -->


  </div>

</template>

<script>

import Articles from './components/Articles'
import About from './components/About'

export default {
  name: 'app',
  components: {
    About
  },
  data() {
    return {
     
    }
  }
}
</script>

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

  .nav-item {
    margin: auto 40px;
    font-size: 1.4em;
  }

  .nav-item:hover {
    border-bottom: #f4bc61 2px solid;
    border-top: #f4bc61 2px solid;
  }

  .bg-light {
    background-color: #9e978c;
  }

</style>

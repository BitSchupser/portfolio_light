<template>
  <div id="app" class="container">
    
    <!-- Portfolio Title or Branding -->
    <nav class="navbar navbar-light justify-content-center">
      <span class="navbar-brand mb-0 h1">Your Name</span>
    </nav >

    <!-- Navigation / Top Menu -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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

    <About />

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
      background-color: #e2e2e2;
      color: #000;
      font-family: 'Open Sans', sans-serif;
  }

  .h1 {
    font-size: 3.5em;
    margin: 40px auto;
  }

</style>

<nav id="navvy">
  <ul>
    <li id="nav-part"><strong>Ann's Website</strong></li>
  </ul>
  <ul>
    <li id="nav-part"><a href="resume">Resume</a></li>
    <li id="nav-part"><a href="hobbies">Hobbies</a></li>
  </ul>
</nav>

<body>
  <slot />


  <footer>
    <p>© Ann Baturytski. All rights reserved. Other attributions cited in document or
    page source</p>
  </footer>
</body>

<style>
  #nav-part {
    margin: 20px;
  }

  #navvy {
    height: 50px;
  }
</style>
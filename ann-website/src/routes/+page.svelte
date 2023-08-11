<script lang="ts">

  let name = ""

  function getUserName() {
    let name = document.getElementById("#userValue");
  }
</script>
<body>
  <main>
    <h1>Hello, what is your name?</h1>
    <input id="userValue">
    <button on:click={getUserName}>Submit</button>
    <h1 id="name">Hello {name},  my name is Ann.</h1>
    <img src="ann.jpg" alt="Picture of Ann" id="profile">
    <!-- blog post -->
  </main>
</body>
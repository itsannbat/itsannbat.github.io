<script>
  import "../app.css";
  import Navbar from "../lib/Navbar.svelte";
  import Footer from "../lib/Footer.svelte";
</script>

<main>
  <Navbar />
    <slot />
  <Footer />
</main>
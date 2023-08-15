<script>
	import About from "$lib/About.svelte";
	import Hobbies from "$lib/Hobbies.svelte";
	import { onMount } from "svelte";

  let text = "";
  let currentIndex = 0;

  const originalText = "Hello world, I'm Ann!";
  const delay = 100; // Delay between each character (in milliseconds)

  onMount(() => {
    const interval = setInterval(() => {
      if (currentIndex < originalText.length) {
        text += originalText[currentIndex];
        currentIndex += 1;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  });
</script>
	
<About/>
<Hobbies/>
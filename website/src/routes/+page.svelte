<script>
	import About from "$lib/About.svelte";
	import Hobbies from "$lib/Hobbies.svelte";
  import Contact from "$lib/Contact.svelte";
	import { onMount } from "svelte";
  import { quintOut } from 'svelte/easing';
  import { slide } from 'svelte/transition';

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

<div transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }} class="min-h-screen flex items-center justify-center">
  <div id="typewriter" class="font-bold text-center text-xl">{text}</div>
</div>
<About/>
<Hobbies/>
<Contact/>
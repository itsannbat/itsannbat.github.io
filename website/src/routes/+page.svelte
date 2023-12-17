<script>
	import About from "$lib/About.svelte";
	import Hobbies from "$lib/Hobbies.svelte";
  import Contact from "$lib/Contact.svelte";
  import Project from "$lib/Project.svelte";
	import { onMount } from "svelte";
  import { quintOut } from 'svelte/easing';
  import { slide } from 'svelte/transition';

  let text = "";
  let currentIndex = 0;

  const originalText = "Hello world, I'm Ann!";
  const delay = 100; // Delay between each character (in milliseconds)
  const lineHeight = 30;

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

  let trueTexts = [
    "Text 1",
    "Text 2",
    "Text 3",
    "Text 4",
    // ... more texts
  ];

  const codeLines = [
    "System.out.println('Hello, world!');",
    "const x = 'Svelte';",
    "if (user.active) { ... }",
    "document.getElementById('myId');",
    "return true;"

    // Add more lines as needed...
  ];

  // Function to get a random code line
  function getRandomCodeLine() {
    return codeLines[Math.floor(Math.random() * codeLines.length)];
  }

  // Create an array of code lines for each row
  let rows = Array.from({ length: 8 }, () => getRandomCodeLine());
</script>

<!-- <div class="text-animation-container">
  {#each trueTexts as trueText, index (index)}
    <div class="text-animation" style="animation-duration: {12 + index}s;">
      {trueText}
    </div>
  {/each}
</div> -->
<div class="text-animation-container" style="height: {lineHeight * trueTexts.length}px;">
  {#each trueTexts as trueText, index (index)}
    <div
      class="text-animation"
      style="animation-duration: {12 + index}s; top: {index * lineHeight}px;"
    >
      {trueText}
    </div>
  {/each}l
</div>
<div transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }} class="min-h-screen flex items-center justify-center">
  <div id="typewriter" class="font-bold text-center text-xl">{text}</div>
</div>
<div>
  <About />
  <div class="my-10"></div> <!-- This adds margin on the y-axis (top and bottom) -->
  <Project/>
  <div class="my-10"></div>
  <Hobbies />
  <div class="my-10"></div> <!-- This adds margin on the y-axis (top and bottom) -->
  <Contact />
  <div class="my-10"></div>
</div>

<style>
  .text-animation {
    position: absolute;
    white-space: nowrap;
    left: 0;
    animation: slide-in 7s linear infinite;
  }

  .text-animation-container {
    width: 100vw;
    overflow: hidden;
    position: relative; /* Establish a positioning context for absolutely positioned children */
    /* height is set dynamically in the inline style */
  }

  @keyframes slide-in {
    from {
      transform: translateX(-5000%);
    }
    to {
      transform: translateX(5000%);
    }
  }
</style>

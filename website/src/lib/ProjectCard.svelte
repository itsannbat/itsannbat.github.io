<script>
  // Define props for the component
  export let imageSrc; // Image source URL
  export let title;    // Project title
</script>

<!-- Project Card -->
<div class="border border-gray-300 shadow-md rounded-lg p-4">
  <img src={imageSrc} alt={title} class="w-full h-auto rounded-lg mb-2" />
  <h2 class="text-xl font-semibold">{title}</h2>
</div>

<style>
  /* Add any custom styles for your project card here */
</style>

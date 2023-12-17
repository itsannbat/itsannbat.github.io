<script>
  // Define props for the component
  export let imageSrc; // Image source URL
  export let title;    // Project title
</script>

<!-- Project Card -->
<div class="border border-gray-300 shadow-md rounded-lg p-4">
  <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg mb-2">
    <img src={imageSrc} alt={title} class="object-cover w-full h-full" />
  </div>
  <h2 class="text-xl font-semibold">{title}</h2>
</div>


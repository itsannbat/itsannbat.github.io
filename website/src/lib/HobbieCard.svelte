<script>
  export let img = "";
  export let name = "";
  export let quotes = [];
</script>

<div class="flex items-center p-4">
  <div class="h-24 w-40 max-w-xs max-h-xs overflow-hidden rounded-full mr-4 flex-shrink-0">
    <img src={img} alt={name} class="h-full w-full object-cover">
  </div>
  <div>
    <h2 class="text-lg font-semibold text-gray-800">{name}</h2>
      <ul class="text-sm text-gray-600">
        {#each quotes as quote}
          <li class="list-disc ml-6">{quote}</li>
        {/each}
      </ul>
  </div>
</div>
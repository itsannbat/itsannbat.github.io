<script>
  export let img = "";
  export let name = "";
  export let quotes = [];
</script>

<div class="flex items-center p-4">
  <img src={img} alt={name} class="h-1/3 w-1/3 rounded-full mr-4">
  <div>
    <h2 class="text-lg font-semibold text-gray-800">{name}</h2>
      <ul class="text-sm text-gray-600">
        {#each quotes as quote}
          <li class="list-disc ml-6">{quote}</li>
        {/each}
      </ul>
  </div>
</div>
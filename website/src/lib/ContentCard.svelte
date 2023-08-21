<script type>
  export let img = "";
  export let name = "";
  export let quotes = [];
</script>

<div class="bg-white rounded-lg shadow-2xl p-10 w-4/5 m-2 mx-auto">
  <div class="flex items-center p-4">
    <img src={img} alt={name} class="h-1/3 w-1/3 rounded-full mr-4">
    <div>
      <h2 class="text-lg font-semibold text-gray-800">{name}</h2>
      <ul class="text-sm text-gray-600">
        {#each quotes as quote}
          <h2>&emsp;{quote}</h2>
        {/each}
      </ul>
    </div>
  </div>
</div>
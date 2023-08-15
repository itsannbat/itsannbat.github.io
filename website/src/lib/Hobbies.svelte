<script lang="ts">
  import { createAccordion, melt } from '@melt-ui/svelte';
  import { writable } from 'svelte/store';
  import { slide } from 'svelte/transition';
	import HobbieCard from './HobbieCard.svelte';

  const externalValue = writable('item-1');

  const {
    elements: { content, item, trigger, root },
    helpers: { isSelected },
  } = createAccordion({ multiple: true});

  const hobbieCards = [
    {
      img: "blanca_lake.jpeg",
      name: "Blanca Lake",
      quotes: [
        "This hike is for intermediate/advanced hikers",
        "This lake is the most beautiful lake I have ever seen",
        "There are bugs everywhere so make sure to bring bug spray"
      ]
    },
    {
      img: "camp_muir.jpeg",
      name: "Camp Muir",
      quotes: [
        "This hike is for more advanced hikers, it is definitely a mental struggle",
        "I recommend doing this hike only in the summer, from July-September",
        "Grab a trash bag so you can slide down!"
      ]
    },
    {
      img: "cherry_creek.jpeg",
      name: "Cherry Creek Falls Trail",
      quotes: [
        "This hike is for more beginner/intermediate hikers",
        "A nice stroll in the woods to a gorgeous waterfall at the end of the loop",
        "Make sure to see the abandoned cars"
      ]
    },
    {
      img: "colchuck_lake.jpeg",
      name: "Colchuck Lake",
      quotes: [
        "This hike is for intermediate hikers",
        "Amazing stunning views, but I heard it has gotten quite popular so come on a weekday",
        "It's next to Leavenworth so grab a bratwurst when you're done!"
      ]
    }
];

const items = [
    {
      id: 'item-1',
      title: 'Blanca Lake',
      description: {
        component: HobbieCard,
        img: hobbieCards[0].img,
        name: hobbieCards[0].name,
        quotes: hobbieCards[0].quotes
      },
      disabled: false,
    },
    {
      id: 'item-2',
      title: 'Camp Muir',
      description: {
        component: HobbieCard,
        img: hobbieCards[1].img,
        name: hobbieCards[1].name,
        quotes: hobbieCards[1].quotes
      },
      disabled: false,
    },
    {
      id: 'item-3',
      title: 'Cherry Creek Falls Trail',
      description: {
        component: HobbieCard,
        img: hobbieCards[2].img,
        name: hobbieCards[2].name,
        quotes: hobbieCards[2].quotes
      },
      disabled: false,
    },
    {
      id: 'item-4',
      title: 'Colchuck Lake',
      description: {
        component: HobbieCard,
        img: hobbieCards[3].img,
        name: hobbieCards[3].name,
        quotes: hobbieCards[3].quotes
      },
      disabled: false,
    },
  ];
</script>

<h2 class="text-center text-lg font-semibold text-gray-800">Here's a list of my favorite hikes in Washington!</h2>
<div
  class="mx-auto w-[18rem] max-w-full rounded-md shadow-lg sm:w-[50rem]"
  {...$root}
>
  {#each items as {id, title, description}, i}
    <div
      use:melt={$item(id)}
      class="overflow-hidden transition-colors first:rounded-t
            last:rounded-b focus-within:relative focus-within:z-10 focus-within:ring
            focus-within:ring-magnum-400"
    >
      <h2 class="flex">
        <button
          use:melt={$trigger(id)}
          class="flex h-12 flex-1 cursor-pointer items-center justify-between border-b border-b-gray-300
                bg-white px-5 text-base font-medium
                leading-none text-black transition-colors hover:bg-gray-200 focus:!ring-0
                {i === items.length - 1 ? 'border-b-0' : ''}"
        >
          {title}
        </button>
      </h2>
      {#if $isSelected(id)}
        <div
          class="overflow-hidden bg-neutral-100 text-sm text-neutral-900"
          use:melt={$content(id)}
          transition:slide
        >
          <svelte:component this={description.component} {...description} />
        </div>
      {/if}
    </div>
  {/each}
</div>
<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte";

  const projects = [
    {
      imageSource: "hikerup.jpeg",
      Title: "Hiker Up",
      url: "https://github.com/rpechuk/DubHacks-2022",
    },
    {
      imageSource:"Advisor-Assistant.png",
      Title:"Advisor Assistant",
      url:"https://github.com/rpechuk/dubhack21",
    },
    {
      imageSource:"PunchMachine.jpeg",
      Title:"Punch Machine",
      url:"https://github.com/itsannbat/PunchMachine",
    },
    {
      imageSource:"coronalytics.jpeg",
      Title: "Coronalytics",
      url: "https://github.com/LucasWang750/Coronalytics",
    },
    {
      imageSource:"what-if-bot.png",
      Title: "What If Bot",
      url: "https://github.com/itsannbat/WhatIfBot/",
    },
  ]
</script>
<div class="flex flex-col items-center justify-center">
  <div class="w-2/3 text-left mb-8">
    <h1 class="text-2xl font-bold">Projects</h1>
    <p class="mt-4">Here are some of my past projects that I made either with friends or solo</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {#each projects as project}
      <a href={project.url} target="_blank" rel="noopener noreferrer" class="transition-shadow duration-300 hover:shadow-2xl">
        <ProjectCard imageSrc={project.imageSource} title={project.Title} />
      </a>
      {/each}
    </div>
  </div>
</div>
<script lang="ts">
  import { createAvatar, melt } from '@melt-ui/svelte';

  const {
    elements: { image, fallback },
  } = createAvatar({
    src: 'mail.png',
  });

  const {
    elements: { image: imageA, fallback: fallbackA },
  } = createAvatar({
    src: 'github.png',
  });

  const {
    elements: { image: imageB, fallback: fallbackB },
  } = createAvatar({
    src: 'linkedin.png',
  });
</script>

<div class="flex flex-col items-center justify-center">
  <div class="w-2/3 text-left mb-8">
    <h1 class="text-2xl font-bold">Contact Me!</h1>
    <p class="mt-4">I'm most active on email, but here's a link to my socials. My resume is added below as well if you are interested in checking it out!</p>
  </div>
    <div class="flex w-full items-center justify-center gap-6 p-4 ">
      <div
        class="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100"
      >
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJFkslxCdcfpPzdscPSvtMGGxHrSHpsQJBrFHNGHJrhBPWmJMFcQxhwjMFqbsnShxhPnV">
        <img
          use:melt={$image}
          alt="Avatar"
          class="h-full w-full rounded-[inherit]"
        />
        </a>
        <span use:melt={$fallback} class="text-3xl font-medium text-magnum-700"
          >M</span
        >
      </div>
      <div
        class="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100"
      >
        <a href="https://github.com/itsannbat">
        <img
          use:melt={$imageA}
          alt="Avatar"
          class="h-full w-full rounded-[inherit]"
        />
        </a>
        <span use:melt={$fallbackA} class="text-3xl font-medium text-magnum-700"
          >G</span
        >
      </div>
      <div
        class="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100"
      >
        <a href="https://www.linkedin.com/in/annbat/">
        <img
          use:melt={$imageB}
          alt="Avatar"
          class="h-full w-full rounded-[inherit]"
        />
        </a>
        <span use:melt={$fallbackB} class="text-3xl font-medium text-magnum-700"
          >LI</span
        >
      </div>
    </div>
  </div>
<template>
  <div class="h-screen">
    <!-- Logo -->
    <div class="grid grid-col justify-self-center">
      <UAvatar
        class="mt-12"
        src="/_nuxt/assets/media/MainLogo 2.png"
        :ui="{
          root: 'size-60',
        }"
      />
    </div>

    <!-- Welcome Text -->
    <div class="grid grid-col">
      <div class="mt-17 pl-18 pr-18">
        <h2 class="font-raleway font-bold text-5xl">
          Welcome
        </h2>
        <p class="text-xl font-bold">
          to my Portfolio-Page.
        </p>
        <p class="mt-3">
          Watch out for my Linktree on my
        </p>
        <p class="pl-4 font-bold">
          About Me-Page
        </p>
        <p>to get right onto my Socials.</p>
        <p class="pt-3">
          Enjoy your stay.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

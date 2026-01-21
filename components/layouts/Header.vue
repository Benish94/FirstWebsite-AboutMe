<template>
  <div class="fixed top-0 left-0 right-0 h-14 z-50 shadow flex items-center bg-[url(_nuxt/assets/media/Menubar.png)]">
    <!-- HomeButton mit Logo in Menu -->
    <UButton
      :avatar="{ src: '/_nuxt/assets/media/MainLogo 2.png' }"
      color="neutral"
      variant="ghost"
      to="/"
      size="xl"
      class="bg-sky-500/85 h-full rounded-none"
    >
      <!-- Menu -->
    </UButton>
    <UNavigationMenu
      color="primary"
      variant="link"
      highlight
      highlight-color="primary"
      orientation="horizontal"
      :items="menu"
      class="w-full mr-4 pb-0.5"
    />

    <!-- Light & Dark-Mode Button -->
    <!-- <UButton
            icon="i-heroicons-moon"
            class="ml-auto mr-4"
            size="sm"
            variant="ghost"
            :aria-label="colorMode.preference === 'dark' ? 'Dark Mode' : 'Light Mode'"
            @click="toggleColorMode"
        /> -->

    <!-- Hover-Effekt im Menü -->
    <!-- :ui="{item: 'hover:bg-teal-500/50'}"  -->
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

// Menü
const menu = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'About Me',
      icon: 'i-meteor-icons:bilibili',
      to: 'aboutme',
    },
  ], [
    {
      label: 'Modal-Test',
      icon: 'i-meteor-icons:folder',
      to: 'modaltest',
    },
  ],
]);
</script>

<style scoped>

</style>

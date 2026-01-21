<template>
  <div
    meta
    name="viewport"
    content="width=device-width, initial-scale=1"
    class="bg-[url('_nuxt/assets/media/AboutBG2.png')] bg-[repeat, no-repeat] g-[top, top] bg-[auto, auto]"
  >
    <LayoutsHeader />
    <div class="pt-14">
      <slot></slot>
    </div>

    <!-- Kalender -->
    <!-- <UPopover>
      <UButton
        class="hover:bg-sky-700 max-w-fit fixed right-4 bottom-14 sm:bottom-16 sm:right-5"
        color="neutral"
        variant="outline"
        icon="i-lucide-calendar"
      >
        {{ modelValue ? df.format(modelValue.toDate(getLocalTimeZone())) : 'Select a date' }}
      </UButton>
      <template #content>
        <UCalendar
          v-model="modelValue"
          class="p-2"
        />
      </template>
    </UPopover>
    <div>
    </div> -->

    <!-- Fußzeile -->
    <UFooter
      class="h-14 w-full text-right content-center pr-5 fixed bottom-0 right-0 text-xs sm:text-sm bg-no-repeat bg-cover bg-center bg-[url('/assets/media/Menubar.png')]"
      type="solid"
    >
      Copyright &copy; {{ new Date().getFullYear() }}
      <br />
      by Benishment
    </UFooter>

    <!-- Seperator mit Logo -->
    <USeparator
      size="sm"
      color="neutral"
      type="solid"
      class="fixed bottom-11 w-full"
      :avatar="{
        src: '/_nuxt/assets/media/MainLogo 2.png',
      }"
    />
  </div>
</template>

<script setup lang="ts">
// Kalender
// import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date';
//
// const df = new DateFormatter('en-US', {
//   dateStyle: 'medium',
// });
// const modelValue = shallowRef(new CalendarDate(2022, 1, 10));

// Light & Dark Mode
// const colorMode = useColorMode()
// function toggleColorMode() {
//   colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
// }
</script>

<style scoped></style>

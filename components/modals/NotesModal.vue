<template>
  <div class="h-screen px-18 py-12">
    <div class="min-w-100">
      <UCard variant="subtle">
        <template #header>
          <div class="flex justify-between">
            <h1 class="font-bold text-3xl text-highlighted">
              Active Notes:
            </h1>
            <UButton
              label="Clear All"
              color="error"
              variant="outline"
              class="text-sm flex"
              @click="clearAllNotes"
            />
          </div>
        </template>
      </UCard>
      <UCard
        class="mt-2 h-fit min-h-58 text-black"
        variant="subtle"
      >
        <div
          v-if="notearr.length === 0"
          class="text-neutral-50 italic px-4 py-2"
        >
          <br />
          NaN
          <br />
          <br />
          <p class="pl-3">
            Not a Note
          </p>
        </div>
        <div
          v-else
          class="flex flex-row mx-2 overflow-auto gap-4"
        >
          <div class="mx-6 w-full p-4 grid grid-cols-1 sm:grid-cols-4 gap-4 justify-between">
            <div
              v-for="(note, index) in notearr"
              :key="index"
              class="relative p-3 min-h-35 min-w-40 max-w-65 pr-8 text-zinc-50 font-medium bg-primary/45 outline-zinc-200/80 outline-2 rounded"
            >
              <UButton
                icon="i-ix:trashcan"
                class="absolute top-1 right-1 text-xs bg-primary/25 text-white hover:bg-red-600 p-3 w-5 h-5 flex items-center justify-center"
                title="Löschen"
                @click="deleteNote(index)"
              />
              {{ index + 1 }}. {{ note }}
            </div>
          </div>
        </div>
      </UCard>
    </div>
    <div>
      <div
        class="flex h-fit w-full justify-self-center"
      >
        <UModal
          v-model:open="open"
          class="flex justify-self-center w-fit"
          title="Write your thoughts:"
          description="Write down a handy Note"
          close-icon="i-meteor-icons:xmark"
        >
          <UButton
            label="Open new Note"
            color="primary"
            variant="subtle"
            class="mt-3 mx-auto justify-center text-xl font-bold px-18 py-3"
          />

          <template #body>
            <UTextarea
              id="notetext"
              v-model="text"
              class="grid content-fit"
              color="neutral"
              variant="subtle"
              size="lg"
              placeholder="Note to myself..."
              :rows="7"
              autofocus
              @keydown="handleKeydown"
              @keydown.enter="handleEnter"
            />
          </template>
          <template #footer>
            <div class="flex gap-4 align-right pr-5">
              <UButton
                id="submit"
                label="Submit"
                color="primary"
                variant="soft"
                @click="submit"
              />
              <UButton
                label="Close"
                color="primary"
                variant="soft"
                @click="dismiss"
              />
            </div>
          </template>
        </UModal>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { UTextarea } from '#components';

const open = ref(false);
const notearr = ref<string[]>([]);
const text = ref('');

function deleteNote(index: number) {
  if (confirm('Delete Note?')) {
    notearr.value.splice(index, 1);
  }
}
function clearAllNotes() {
  if (confirm('This will delete all Notes!')) {
    notearr.value = [];
  }
}
function submit() {
  if (text.value === '') {
    console.log(null);
    console.log(notearr.value);
  }
  else {
    notearr.value.push(text.value);
    console.log(text.value);
    text.value = '';
    open.value = false;
  }
}
function dismiss() {
  console.log('Dismissed');
  open.value = false;
}
function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    submit();
  }
}
function handleEnter(event: KeyboardEvent) {
  if (event.shiftKey) {
    console.log('Enter');
    return;
  }
  submit();
}
</script>

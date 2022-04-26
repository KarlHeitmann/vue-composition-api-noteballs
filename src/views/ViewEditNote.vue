<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      placeholder="Edit note"
      label="Edit Note"
      bgColor="link"
      >
      <template #buttons>
        <button
          @click="$router.back()"
          to="/"
          class="button is-link is-light"
          >
          Cancel
        </button>
        <button
          @click="$router.push('/')"
          to="/"
          class="button is-link is-light"
          >
          Cancel
        </button>
        <RouterLink
          to="/"
          class="button is-link is-light"
          >
          Cancel
        </RouterLink>
        <button
          class="button is-link has-background-success"
          :disabled="!noteContent"
          >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/*
  imports
*/

  import AddEditNote from '@/components/Notes/AddEditNote.vue'
  import { ref } from "vue";

/*
  note
*/

  const noteContent = ref('')


</script>
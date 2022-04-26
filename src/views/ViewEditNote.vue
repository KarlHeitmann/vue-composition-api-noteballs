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

  import { ref } from "vue";
  import { useRoute } from "vue-router";
  import AddEditNote from '@/components/Notes/AddEditNote.vue'
  import { useStoreNotes } from "@/stores/storeNotes";

/*
  router
*/

  const route = useRoute()

/*
  store
*/

  const storeNotes = useStoreNotes()
/*
  note
*/

  const noteContent = ref('')
  console.log(route.params.id)
  noteContent.value = storeNotes.getNoteContent(route.params.id)


</script>
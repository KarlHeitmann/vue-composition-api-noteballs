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
          class="button is-link is-light mr-2"
          >
          Cancel
        </button>
        <button
          @click="$router.push('/')"
          to="/"
          class="button is-link is-light mr-2"
          >
          Cancel
        </button>
        <RouterLink
          to="/"
          class="button is-link is-light mr-2"
          >
          Cancel
        </RouterLink>
        <button
        @click="handleSaveClicked"
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
  
  noteContent.value = storeNotes.getNoteContent(route.params.id)

/*
  save clicked
*/

  const handleSaveClicked = () => {
    console.log("Clicked")
    let payload = {
      id: route.params.id,
      content: noteContent.value
    }
    storeNotes.updateNote(route.params.id, noteContent.value)
  }

</script>
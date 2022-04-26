<template>
  <div class="notes">

    <AddEditNote
      v-model="newNote"
      >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success">
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <Note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
    />
      <!-- YA NO SE OCUPA, ESTO IBA DEBAJITO DE :note="note": @deleteClicked="deleteNote" -->
  </div>
</template>

<script setup>
/*
  imports
*/
  import { ref } from 'vue';
  import { useStoreNotes } from "@/stores/storeNotes";
  import AddEditNote from '@/components/Notes/AddEditNote.vue'
  import Note from '@/components/Notes/Note.vue'

/*
  store
*/
  const storeNotes = useStoreNotes()

/*
  notes
*/
  const newNote = ref('')
  const newNoteRef = ref(null)

  const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ""
    newNoteRef.value.focus()
  }

</script>
<template>
  <div class="notes">

    <AddEditNote
      v-model="newNote"
      placeholder="Add a new note"
      ref="addEditNoteRef"
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
  // import { ref, watch } from 'vue'; // XXX Usar este y descomentar abajo para habilitar el watch local
  import { useStoreNotes } from "@/stores/storeNotes";
  import AddEditNote from '@/components/Notes/AddEditNote.vue'
  import Note from '@/components/Notes/Note.vue'
  import { useWatchCharacters } from '@/use/useWatchCharacters'

/*
  store
*/
  const storeNotes = useStoreNotes()

/*
  notes
*/
  const newNote = ref('')
  const addEditNoteRef = ref(null)

  const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ""
    addEditNoteRef.value.focusTextarea()
  }

/**
 * watches
 * XXX Esto es con watch local
 */ 
/*
  watch(newNote, (newValue, oldValue) => {
    console.log("newValue", newValue)
    console.log("oldValue", oldValue)
    if (newValue.length === 100) {
      alert('Only 100 characters allowed gosh darnit!')
    }
  })
  */
  useWatchCharacters(newNote)

</script>
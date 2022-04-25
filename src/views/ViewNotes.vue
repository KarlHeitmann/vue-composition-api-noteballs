<template>
  <div class="notes">

    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            v-model="newNote"
            ref="newNoteRef"
            placeholder="Textarea"
            />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success">
            Add New Note
          </button>
        </div>
      </div>

    </div>

    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>

<script setup>
/*
  imports
*/
  import { ref } from 'vue';
  import Note from '@/components/Notes/Note.vue'

/*
  notes
*/
  const newNote = ref('')
  const newNoteRef = ref(null)
  const notes = ref([
    {
      id: 'id1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sunt laboriosam repellat voluptas assumenda dolorem velit, suscipit sint voluptatem. Perferendis minima deleniti doloremque eius blanditiis eligendi iste nihil possimus illum!'
    },
    {
      id: 'id2',
      content: 'This is a shorter note! Woo!'
    },
  ])

  const addNote = () => {
    let currentDate = new Date().getTime(),
        id = currentDate.toString() // NOTA: se puede usar tambien una libreria como uuidv4 para generar ids unicos

    let note = {
      id,
      content: newNote.value,
    }

    notes.value.unshift(note)
    newNote.value = ""
    newNoteRef.value.focus()
  }
</script>
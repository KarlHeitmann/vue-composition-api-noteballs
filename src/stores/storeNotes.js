import { defineStore } from "pinia";

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sunt laboriosam repellat voluptas assumenda dolorem velit, suscipit sint voluptatem. Perferendis minima deleniti doloremque eius blanditiis eligendi iste nihil possimus illum!'
        },
        {
          id: 'id2',
          content: 'This is a shorter note! Woo!'
        },
      ]
    }
  },
  actions: {
    addNote(newNoteContent) {
      console.log('addNote', newNoteContent)
      let currentDate = new Date().getTime(),
          id = currentDate.toString() // NOTA: se puede usar tambien una libreria como uuidv4 para generar ids unicos

      let note = {
        id,
        content: newNoteContent,
      }

      this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
      console.log('deleteNote', idToDelete)
      this.notes = this.notes.filter(note => {
        return note.id !== idToDelete
      })
    },
    updateNote(id, content) {
      let index = this.notes.findIndex(note => note.id == id)
      this.notes[index].content = content
    }
  },
  getters: {
    // XXX getNoteContent a priori NO ES UNA FUNCION, si quiero que interactue, debo hacer que _devuelva_ una funcion
    getNoteContent: (state) => (id) => state.notes.find(n => n.id == id).content,
    totalNotesCount: (state) => state.notes.length,
    totalCharactersCount: (state) => state.notes.reduce((sum, n) => n.content.length + sum, 0)
  }
})
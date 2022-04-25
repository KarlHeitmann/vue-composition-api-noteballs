<template>
  <div
    class="card mb-4"
    >
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="has-text-right has-text-grey-light mt-2" >
        <small>{{ characterLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a
        @click.prevent="storeNotes.deleteNote(note.id)"
        href="#"
        class="card-footer-item"
        >
        Delete
      </a>
    </footer>
  </div>

</template>

<script setup>

/*
  imports
*/

  import { computed } from 'vue';
  import { useStoreNotes } from "@/stores/storeNotes";

/*
  props
*/

  const props = defineProps({
    note: {
      type: Object,
      required: true
    }
  })

/*
  emits
*/
  // const emit = defineEmits(['deleteClicked']) // Ya no se ocupa con pinia.

/*
  store
*/
  const storeNotes = useStoreNotes()

/*
  character length
*/

  const characterLength = computed(() => {
    let l = props.note.content.length
    let description = l > 1 ? 'characters' : 'character'
    return `${l} ${description}`
  })

  /* ya no se esta usando
  const handleDeleteClicked = () => {
    emit('deleteClicked', props.note.id)
  }
  */
</script>

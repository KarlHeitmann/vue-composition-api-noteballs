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

  },
})
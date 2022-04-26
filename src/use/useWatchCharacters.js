import { watch } from 'vue'

export function useWatchCharacters(valueToWatch) {
  watch(valueToWatch, (newValue, oldValue) => {
    console.log("newValue", newValue)
    console.log("oldValue", oldValue)
    if (newValue.length === 100) {
      alert('Only 100 characters allowed gosh darnit!')
    }
  })

}
import { defineStore } from "pinia";
import { ref, Ref } from "vue";

export const useNotesStore = defineStore("notes", () => {
  const notes: Ref<string> = ref("");

  return { notes };
});

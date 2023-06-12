import { defineStore } from "pinia";
import { computed, ref, Ref } from "vue";
import type Todo from "../types/Todo";

export const useTodosStore = defineStore("todos", () => {
  const todos: Ref<Todo[]> = ref([]);

  function addTodo(todo: Todo) {
    todos.value.push(todo);
  }

  function removeTodo(id: number) {
    if (todos.value.length >= 1) {
      todos.value = todos.value.filter((todo) => todo.id !== id);
    }
  }

  function editTodo(id: number, newText: string) {
    todos.value.filter((todo) => todo.id === id)[0].text = newText;
  }

  function clearTodos() {
    todos.value = [];
  }

  const getTodos = computed(() => {
    return todos;
  })


  return { todos, addTodo, removeTodo, editTodo, clearTodos};
});

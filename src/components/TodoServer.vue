<template>
  <div>
    <ul>
        <TodoItem 
        v-for="(todo, i) in todos"
        :index="i"
        :todo="todo"
        :key="todo.id"
        v-on:get-change-completed="getChangeCompleted"
        @remove-todo="removeTodo"/>
    </ul>
 </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
  props: ['todos'],
    components: {
      TodoItem
    },
    methods: {
      getChangeCompleted(id) {
        this.$emit('get-change-completed', id)
      },
      removeTodo(id) {
        this.$emit('remove-todo', id)
      }
    }
}
</script>

<style scoped>
 ul {
    margin-top: 25px;
    padding: 0;
    margin-left: 0;
 }
</style>
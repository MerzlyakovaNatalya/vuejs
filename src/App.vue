<template>
  <div>
    <h1>Задачи Frontend-разработчика</h1>
  <AddTodo @add-todo="addTodo"></AddTodo>
  <hr/>
  <TodoList 
  v-if="todos.length"
  :todos="todos"
  v-on:get-change-completed="getChangeCompleted"
  @remove-todo="removeTodo"
  />
  <div v-else>
    <p>Задач нет</p>
    <button @click="reload">Показать задачи</button>
  </div>
  <h2>Реализация REST API</h2>
  <p>Задача поступила с сервера</p>
  <LoaderApi v-if="loading"/>
  <TodoServer 
  :todos="todosServer"
  v-on:get-change-completed="getChange"
  @remove-todo="removeTodoServer"
  />
  </div>
  <div>
    <h2>Реализация работы Vue router</h2>
    <router-view></router-view>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import TodoServer from '@/components/TodoServer.vue'
import LoaderApi from '@/components/LoaderApi.vue'
export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 1, title: 'Выполнить адаптивную вёрстку', completed: false},
        {id: 2, title: 'Настроить REST API', completed: false},
        {id: 3, title: 'Настроить маршрутизацию', completed: false},
        {id: 3, title: 'Реализовать добавление задач', completed: false}
      ], 
      todosServer: [],
      loading: true
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    delete json.userId;
    setTimeout(() => {
      this.todosServer.push(json)
    this.loading = false
    }, 1000)})
    
  },
  components: {
    TodoList,
    AddTodo,
    TodoServer,
    LoaderApi
  },
  methods: {
        getChangeCompleted(id) {
           this.todos.forEach((i) => {
            if(i.id === id) {
              i.completed = !i.completed
            }
          });
        },
        removeTodo(id) {
          this.todos = this.todos.filter(item => item.id !== id)
        },
        addTodo(newTodo) {
         this.todos.push(newTodo)
        }, 
        getChange(id) {
          this.todosServer.forEach((i) => {
            if(i.id === id) {
              i.completed = !i.completed
            }
          });
        },
        removeTodoServer(id) {
          this.todosServer = this.todosServer.filter(item => item.id !== id)
        },
        reload() {
          location.reload();
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

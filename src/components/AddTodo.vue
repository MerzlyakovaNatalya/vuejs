<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title" class="input-text">
        <button type="submit">Добавить задачу</button>
    </form>
</template>

<script>
export default {
    data() {
     return {
        title: ''
     }
    },
    methods: {
        onSubmit() {
            if(this.title.trim()) {
              const newTodo = {
                id: Date.now(),
                title: this.title,
                completed: false
              }
              this.$emit('add-todo', newTodo)
              this.title = ''

            }
        }
    }
}
</script>

<style scoped>
 .input-text {
   margin-top: 40px;
   margin-bottom: 40px;
 }
</style>

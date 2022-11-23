<template>
 <li class="li">
    <span :class="{ done: todo.completed }">
        <input 
        type="checkbox" 
        v-on:change="$emit('get-change-completed', todo.id)">
        <strong>{{index+1}}</strong>
        {{todo.title}}
    </span>
    <button 
        class="rm"
        @click="$emit('remove-todo', todo.id)"
        >&times;</button>
 </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: Number
    }
    }
</script>

<style scoped>

.li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 2rem;
 }
 .rm{
    background: red;
    color: #fff;
    border-radius: 50%;
    font-weight: bold;
    border: 1px solid red;
    margin-left: 5rem;
 }
.done {
    text-decoration: line-through;
}
input {
    margin-right: 2rem;
}
@media screen and (max-width: 550px) {
    .rm {
        margin-left: 0;  
    }
    .li {
    border: 1px solid rgb(236, 230, 230);
    display: flex;
    padding: 1px;
    justify-content: space-between;
    margin-bottom: 2rem;
 }
}
</style>
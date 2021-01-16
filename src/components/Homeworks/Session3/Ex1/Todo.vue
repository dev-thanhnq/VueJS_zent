<template>
  <div class="hello">
    <div class="container">
      <div class="todo">
        <h1 class="title">Todo App</h1>
        <input type="text" v-model="work" @keydown.enter="addWork()" placeholder="Nhập công việc và bấm enter để thêm">
        <TodoItem :listWorks="listWorks"/>
      </div>
    </div>
  </div>
</template>

<script>
  import TodoItem from "./TodoItem"
  export default {
    components: {
      TodoItem
    },
    data() {
      return {
        id: 0,
        work: '',
        listWorks: [],
      }
    },
    methods: {
      addWork() {
        this.listWorks.push({id: this.id, name: this.work, checked: false})
        this.work = ''
        this.id += 1
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 700px;
    background-color: #0080dd;
    .todo {
      width: 500px;
      height: 600px;
      border-radius: 10px;
      background-color: #ffffff;
      padding: 20px;
      .title {
        margin: 0;
        color: #39cd75;
      }
      input {
        width: 480px;
        height: 40px;
        margin: 15px 0;
        border: 1px solid #0080dd;
        border-radius: 5px;
      }
    }
  }
</style>
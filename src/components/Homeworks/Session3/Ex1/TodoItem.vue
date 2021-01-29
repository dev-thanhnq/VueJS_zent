<template>
  <div class="list-item">
    <div class="item" v-for="(work, index) in todos" :key="index">
      <input type="checkbox" class="check" v-model="work.checked">
      <p v-if="!work.checked">{{work.name}}</p>
      <del v-else>{{ work.name }}</del>
      <button v-if="work.checked" class="delete" @click="deleteWork(work)">Xóa</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
  export default {
    data () {
      return {

      }
    },
    methods: {
      deleteWork(work) {
        this.deleteTodo(work)
      },
      ...mapMutations([
        'deleteTodo'
      ])
    },
    computed: {
      ...mapState([
        'todos'
      ]),
      ...mapGetters([

      ])
    }
  }
</script>

<style lang="scss" scoped>
  .list-item {
    width: 500px;
    height: 480px;
    overflow: auto;
    .item {
      width: 480px;
      height: 80px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: left;
      border-bottom: 1px solid #6E6E6E;
      position: relative;
      .check {
        margin-right: 15px;
      }
      .delete {
        padding: 15px 20px;
        border-radius: 5px;
        border: 0;
        color: #ffffff;
        font-weight: bold;
        background-color: #f54b5e;
        position: absolute;
        right: 20px;
        cursor: pointer;
      }
    }
  }
</style>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ count }}</h1>
    <p>{{ name }}</p>
    <div>Spen time: {{ spentTime }}</div>
    <div>Tim kiem: {{ getTodoByText('x') }}</div>
    <button @click="changeCount()">Click</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'About',
    computed: {
      ...mapState([
        'count', 'name'
      ]),
      ...mapGetters([
          'doneTodos', 'spentTime', 'getTodoByText'
      ])
    },
    methods: {
      ...mapMutations([
          'increment'
      ]),
      changeCount() {
        this.increment()
      }
    }
  }
</script>

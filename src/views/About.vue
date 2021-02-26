<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{count}}</p>
    <button @click="up()">click</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'About',
    computed: {
      ...mapState('home', [
          'count'
      ]),
      ...mapGetters([
      ])
    },
    methods: {
      ...mapMutations('home', [
          'increment'
      ]),
      up() {
        this.increment()
      }
    }
  }
</script>

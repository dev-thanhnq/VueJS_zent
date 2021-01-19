<template>
  <base-layout>
    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template>
  </base-layout>
</template>

<script>
  import BaseLayout from './BaseLayout '
  import Test from '@/components/Session3/LoginForm'
  export default {
    components: {
      BaseLayout,
      Test
    }
  }
</script>
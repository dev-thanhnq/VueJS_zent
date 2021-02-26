<template>
  <div class="wrap">
    <div>
      <input type="checkbox" v-model="checked">
      <span class="title" :class="task.is_complete ? 'complete' : ''">{{task.title}}</span>
    </div>
    <button
        v-if="task.is_complete"
        class="deleteButton"
        @click="onDelete"
    >
      Xóa
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['task'],
  data () {
    return {
      checked: this.task.is_complete,
    }
  },
  methods: {
    onDelete () {
      this.$emit('onDeleteItem')
    }
  },
  watch: {
    checked (value) {
      this.$emit('changeStatus', value)
    }
  }
}
</script>

<style lang="scss" scoped>
$colorStroke: #d8e0ea;
$colorDefault: #253036;
$colorRed: #f54b5e;
$colorWhite: #fff;

.wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 12px;
  border-bottom: 1px solid $colorStroke;

  .title {
    margin-left: 12px;
    color: $colorDefault;

    &.complete {
      text-decoration: line-through;
    }
  }

  .deleteButton {
    background: $colorRed;
    border: unset;
    font-size: 14px;
    font-weight: bold;
    color: $colorWhite;
    width: 60px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 8px;
  }
}
</style>
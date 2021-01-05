<template>
  <div class="hello">
    <div class="container">
      <div class="mainWrap">
        <div class="inputWrap">
          <div class="inputLabel">Nhập tiêu đề</div>
          <input type="text" @input="changeTitle($event.target.value)">
        </div>
        <div class="inputWrap">
          <div class="inputLabel">Nhập nội dung</div>
          <textarea @input="changeContent($event.target.value)"></textarea>
        </div>
      </div>
      <div class="content">
        <div class="title">{{ title }}</div>
        <div v-html="description"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Zent Coding school',
      description: 'Happy class'
    }
  },
  methods: {
    changeTitle(value) {
      this.title = value
    },
    changeContent(value) {
      this.description = value
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    .mainWrap {
      border: 1px solid #6E6E6E;
      padding: 24px;
      height: 300px;
      width: 300px;
      .inputWrap {
        margin-bottom: 10px;
        .inputLabel {
          font-weight: bold;
          margin-bottom: 8px;
          float: left;
        }
        input {
          width: 292px;
          height: 30px;
        }
        textarea {
          width: 292px;
          height: 200px;
        }
      }
    }
    .content {
      width: 400px;
      height: 300px;
      border: 1px solid #6E6E6E;
      padding: 24px;
      margin-left: 10px;
      text-align: left;
      .title {
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  }
</style>

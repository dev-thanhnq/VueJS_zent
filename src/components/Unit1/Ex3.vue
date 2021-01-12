<template>
  <div class="hello">
    <div class="container">
      <div class="calculator">
        <div class="result">{{ result }}</div>
        <div class="input">
          <button class="btn">C</button>
          <button class="btn">del</button>
          <button class="btn">%</button>
          <button class="btn calculation" @click="calculating('/')">/</button>
          <button class="btn" @click="calculating(7)">7</button>
          <button class="btn" @click="calculating(8)">8</button>
          <button class="btn" @click="calculating(9)">9</button>
          <button class="btn calculation" @click="calculating('*')">*</button>
          <button class="btn" @click="calculating(4)">4</button>
          <button class="btn" @click="calculating(5)">5</button>
          <button class="btn" @click="calculating(6)">6</button>
          <button class="btn calculation" @click="calculating('-')">-</button>
          <button class="btn" @click="calculating(1)">1</button>
          <button class="btn" @click="calculating(2)">2</button>
          <button class="btn" @click="calculating(3)">3</button>
          <button class="btn calculation" @click="calculating('+')">+</button>
          <button class="btn btn-0" @click="calculating(0)">0</button>
          <button class="btn" @click="calculating('.')">.</button>
          <button class="btn calculation">=</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: '0'
    }
  },
  methods: {
    calculating(e) {
      this.result += e
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
    .calculator {
      width: 288px;
      height: auto;
      overflow: hidden;
      background: #000000;
      border-radius: 10px;
      .result {
        width: 100%;
        height: 60px;
        color: #ffffff;
        padding: 10px 5px;
        box-sizing: border-box;
        text-align: right;
        font-size: 40px;
      }
      .input {
        width: 100%;
        .btn {
          box-sizing: border-box;
          padding: 15px 5px;
          width: 70px;
          float: left;
          background: #616163;
          border: 0;
          border-radius: 10px;
          margin: 1px 1px;
          cursor: pointer;
          font-size: 20px;
          color: #ffffff;
        }
        .calculation {
          background: #f49e3f;
        }
        .btn-0 {
          width: 142px;
        }
      }
    }
  }
</style>
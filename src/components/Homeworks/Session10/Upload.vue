<template>
  <div class="upload">
    Hình ảnh
    <label for="file" @mouseover="deleteOptionUp" @mouseleave="deleteOptionDown">
      <div v-if="!this.img" class="image" ref="imageDefault">
        <el-image>
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
      <img v-else ref="imagePreview" :src="img" alt="" class="image" id="image-preview">
      <div class="delete-option" ref="deleteBackground">
        <button class="delete-button"><i class="el-icon-circle-close delete-icon" @click="deleteImage"></i></button>
      </div>
    </label>
    <input ref="productImage" type="file" accept="image/*" id="file" @change="onChangeImage">
  </div>
</template>

<script>
export default {
name: "Upload",
  props: ['isOpen', 'isOpenEdit', 'productImg'],
  data () {
    return {
      image: '',
      img: '',
      isExit: false
    }
  },
  methods: {
    onChangeImage(e) {
      if (e.target.files.length) {
        this.image = e.target.files[0]
        this.img = true
        this.img = URL.createObjectURL(e.target.files[0])
        this.$emit('onChangeImage', this.image)
        console.log(this.image)
      }
    },
    deleteOptionUp() {
      if (this.image) {
        this.$refs.deleteBackground.style.display = 'block'
      }
    },
    deleteOptionDown() {
      if (this.img) {
        this.$refs.deleteBackground.style.display = 'none'
      }
    },
    deleteImage() {
      if (this.image) {
        this.image = ''
        this.img = ''
        this.$refs.deleteBackground.style.display = 'none'
        this.$emit('deleteImage')
      }
    }
  },
  watch: {
    isOpen (value) {
      if (value) {
        this.image = false
        this.img = false
      }
    },
    productImg(value) {
      if (value) {
        this.img = this.productImg
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .upload {
    padding-top: 10px;
    position: relative;
    #file {
      display: none;
    }
    .image {
      margin-top: 24px;
      width: 360px;
      height: 263px;
      border: 1px solid #dcdfe6;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .delete-option {
      width: 360px;
      height: 263px;
      background: rgba(16 16 16 / 30%);
      position: absolute;
      display: none;
      top: 51px;
      left: 1px;
      .delete-button {
        width: auto;
        font-size: 25px;
        float: right;
        cursor: pointer;
        color: #d8c9c9;
        background: none;
        border: none;
        outline: none;
      }
    }
  }
</style>
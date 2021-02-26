<template>
  <el-main>
    <el-table
        :data="products"
        style="width: 100%">
      <el-table-column
          prop="name"
          label="Name"
          width="180">
      </el-table-column>
      <el-table-column
          label="Hành động">
        <template v-slot:default="slotProps">
          <el-button type="danger" @click="remove(slotProps.row.id)">Xóa</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {

    }
  },
  methods: {
      ...mapMutations('products', [
          'deleteProduct', 'deleteProductById'
      ]),
    remove(id) {
        this.deleteProductById(id)
    }
  },
  computed: {
    ...mapState('products', [
        'products'
    ]),
  }
}
</script>
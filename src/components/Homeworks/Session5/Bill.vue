<template>
  <el-main>
    <el-table
        :data="bills"
        style="width: 100%">
      <el-table-column
          prop="name"
          label="Name"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="Hành động">
        <template v-slot:default="slotProps">
          <el-button type="danger" @click="remove(slotProps.row)">Xóa</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations('bills', [
       'deleteBill'
    ]),
    remove(bill) {
      this.deleteBill(bill)
    }
  },
  computed: {
    ...mapState('bills', [
      'bills'
    ]),
  }
}
</script>
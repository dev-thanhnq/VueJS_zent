<template>
  <el-main>
    <el-table
        :data="getPaginationProductions"
        border
        style="width: 100%">
      <el-table-column prop="date" label="Mã sản phẩm" width="140">
      </el-table-column>
      <el-table-column prop="name" label="Tên sản phẩm" width="120">
      </el-table-column>
      <el-table-column prop="address" label="Thông số">
      </el-table-column>
    </el-table>
    <div class="block" style="float: right">
      <el-pagination
          background
          @current-change="handleCurrentChange"
          @prev-click="goPrePage"
          @next-click="goNextPage"
          :page-size="5"
          layout="total, prev, pager, next, jumper"
          :total="20">
      </el-pagination>
    </div>
  </el-main>
</template>

<script>
export default {
  data() {
    const item = {
      date: 'SP',
      name: 'Xe máy',
      address: 'Siêu nhanh'
    };
    return {
      tableData: Array(20).fill(item),
      currentPage: 1,
      perPage: 5
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val
    },
    goNextPage () {
      if (this.currentPage < this.lastPage) {
        this.currentPage += 1
      }
    },
    goPrePage () {
      if (this.currentPage > 1) {
        this.currentPage -= 1
      }
    }
  },
  computed: {
    lastPage () {
      return Math.ceil(this.tableData.length / this.perPage);
    },
    getPaginationProductions () {
      return this.tableData.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
    }
  }
}
</script>
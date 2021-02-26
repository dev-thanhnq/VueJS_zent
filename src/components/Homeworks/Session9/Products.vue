<template>
  <div class="container">
    <div class="add-product">
      <el-button type="primary" @click="createProduct()">Thêm mới</el-button>
    </div>
    <el-dialog
        title="Tạo mới sản phẩm"
        :visible.sync="dialogVisible"
        width="30%"
        style="text-align: left"
        >
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="Tên sản phẩm" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Mô tả" prop="description">
          <el-input v-model="ruleForm.description"></el-input>
        </el-form-item>
        <el-form-item label="Giá" prop="price">
          <el-input type="number" v-model="ruleForm.price"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Hủy</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">Tạo mới</el-button>
        </span>
    </el-dialog>
    <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
      <el-table-column
          label="Tên sản phẩm"
          prop="name"
          >
      </el-table-column>
      <el-table-column
          label="Giá(VNĐ)"
          prop="price">
      </el-table-column>
      <el-table-column
          label="Trạng thái"
          prop="description">
      </el-table-column>
      <el-table-column
          align="right">
        <template slot="header" slot-scope="scope">
          <el-input
              @click="handleEdit(scope.$index, scope.row)"
              v-model="search"
              size="mini"
              placeholder="Type to search"/>
        </template>
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Chỉnh sửa</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          <el-dialog
              title="Chỉnh sửa sản phẩm"
              :visible.sync="editModal"
              width="30%"
              style="text-align: left"
          >
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
              <el-form-item label="Tên sản phẩm" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="Mô tả" prop="description">
                <el-input v-model="ruleForm.description"></el-input>
              </el-form-item>
              <el-form-item label="Giá" prop="price">
                <el-input type="number" v-model="ruleForm.price"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="editModal = false">Hủy</el-button>
              <el-button type="primary" @click="editProduct('ruleForm')">Cập nhật</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
          background
          layout="prev, pager, next"
          @current-change="changePage"
          :total="total"
          :page-size="5">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData: [],
      search: '',
      dialogVisible: false,
      editModal: false,
      ruleForm: {
        name: '',
        description: '',
        price: ''
      },
      total: 0,
      idEdit: '',
      rules: {
        name: [
          { required: true, message: 'Tên sản phẩm không được bỏ trống', trigger: 'change' },
        ],
        description: [
          { required: true, message: 'Mô tả không được bỏ trống', trigger: 'change' },
        ],
        price: [
          { required: true, message: 'Giá sản phẩm không được bỏ trống', trigger: 'change' },
        ],
      }
    }
  },
  methods: {
    createProduct() {
      this.dialogVisible = true
      this.ruleForm.name = ''
      this.ruleForm.description = ''
      this.ruleForm.price = ''
    },
    handleEdit(index, row) {
      console.log(row.id)
      this.editModal = true
      this.ruleForm.name = row.name
      this.ruleForm.description = row.description
      this.ruleForm.price = row.price
      this.idEdit = row.id
    },
    editProduct(formName) {
      console.log(this.idEdit)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.updateProduct(this.idEdit)
          this.editModal = false
          alert('cập nhật thành công!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    updateProduct(id) {
      console.log(id)
      axios({
        method: 'put',
        url: 'http://vuecourse.zent.edu.vn/api/products/' + id,
        data: {
          name: this.ruleForm.name,
          description: this.ruleForm.description,
          price: this.ruleForm.price,
        }
      }).then(() => {
        this.getData()
      }).catch((error) => {
        console.log(error);
      });
    },
    handleDelete(index, row) {
      axios({
        method: 'delete',
        url: 'http://vuecourse.zent.edu.vn/api/products/' + row.id,
      }).then(() => {
        this.getData()
      }).catch((error) => {
        console.log(error);
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.storeProduct()
          this.dialogVisible = false
          alert('Tạo mới thành công!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getData() {
      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api/products',
      }).then((response) => {
        this.tableData = response.data.data.data
        console.log(response)
        this.total = response.data.data.total
      }).catch((error) => {
        console.log(error);
      });
    },
    storeProduct() {
      axios({
        method: 'post',
        url: 'http://vuecourse.zent.edu.vn/api/products',
        data: {
          name: this.ruleForm.name,
          description: this.ruleForm.description,
          price: this.ruleForm.price,
        }
      }).then(() => {
        this.getData()
      }).catch((error) => {
        console.log(error);
      });
    },
    changePage(page) {
      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api/products?page=' + page,
      }).then((response) => {
        this.tableData = response.data.data.data
        this.total = response.data.data.total
      }).catch((error) => {
        console.log(error);
      });
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
  .container {
    .add-product {
      text-align: left;
    }
    .pagination {
      text-align: right;
      padding-right: 30px;
      margin-top: 20px;
    }
  }
</style>
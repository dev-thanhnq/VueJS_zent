<template>
  <div class="container">
    <div class="add-product">
      <el-button type="primary" @click="createProduct()">Thêm mới</el-button>
      <br>
      <input v-model="search" class="search" type="text" placeholder="Tìm kiếm sản phẩm" @keydown.enter="searchProduct">
      <input type="file" accept="image/*" @change="changeFile">
      <button @click="uploadFile">Submit</button>
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
        :data="tableData"
        style="width: 100%">
      <el-table-column
          label="Tên sản phẩm"
          prop="name"
          >
      </el-table-column>
      <el-table-column
          label="Giá(VNĐ)"
          prop="price">
        <template slot-scope="scope">
          {{ Number( scope.row.price).toLocaleString('vi-VN') }} VNĐ
        </template>
      </el-table-column>
      <el-table-column
          label="Trạng thái"
          prop="description">
      </el-table-column>
      <el-table-column
          label="Ngày tạo"
          prop="created_at">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          {{ formatDate(scope.row.created_at) }}
        </template>
      </el-table-column>
      <el-table-column
          align="right">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Chỉnh sửa</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Xóa</el-button>
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
import moment from 'moment'
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
      image: '',
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
          this.$message({
            message: 'cập nhật thành công!',
            type: 'success'
          });
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
      this.$confirm('Bạn có chắc chắn muốn xóa không?', 'Cảnh báo', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        axios({
          method: 'delete',
          url: 'http://vuecourse.zent.edu.vn/api/products/' + row.id,
        }).then(() => {
          this.getData()
        }).catch((error) => {
          console.log(error);
        });
        this.$message({
          type: 'success',
          message: 'Xóa thành công!'
        });
      }).catch(() => {

      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.storeProduct()
          this.dialogVisible = false
          this.$message({
            message: 'Tạo mới thành công!',
            type: 'success'
          });
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
    },
    searchProduct() {
      axios({
        method: 'get',
        url: 'http://vuecourse.zent.edu.vn/api/products?page=1',
        params: {
          q: this.search
        }
      }).then((response) => {
        this.tableData = response.data.data.data;
      }).catch((error) => {
        console.log(error);
      });
    },
    formatDate (dateString) {
      return moment(dateString).format('hh:mm | DD/MM/YYYY')
    },
    changeFile(e) {
      if (e.target.files.length) {
        this.image = e.target.files[0]
      }
    },
    uploadFile() {
      const frmData = new FormData()
      frmData.append('name', 'Thành')
      frmData.append('price', 1)
      frmData.append('image', this.image)
      axios({
        method: 'post',
        url: 'http://vuecourse.zent.edu.vn/api/products',
        data: frmData
      }).then(() => {
        console.log('success')
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
      .search {
        width: 300px;
        height: 30px;
        margin-top: 10px;
      }
    }
    .pagination {
      text-align: right;
      padding-right: 30px;
      margin-top: 20px;
    }
  }
</style>
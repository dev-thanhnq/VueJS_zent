<template>
  <div class="container">
    <div class="add-product">
      <el-button type="primary" @click="createProduct()">Thêm mới</el-button>
      <br>
      <input v-model="search" class="search" type="text" placeholder="Tìm kiếm sản phẩm" @keydown.enter="searchProduct">
    </div>
    <el-dialog
        title="Chỉnh sửa sản phẩm"
        :visible.sync="editModal"
        width="50%"
        style="text-align: left"
    >
      <el-row :gutter="20">
        <el-col :span="10">
          <Upload :isOpenEdit="openEdit" :productImg="productImg" @onChangeImage="changeImage" @deleteImage="deleteImage"/>
        </el-col>
        <el-col :span="14">
          <el-form :model="ruleForm" :label-position="label" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
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
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
              <el-button @click="editModal = false">Hủy</el-button>
              <el-button type="primary" @click="editProduct('ruleForm')">Cập nhật</el-button>
            </span>
    </el-dialog>
    <el-dialog
        title="Tạo mới sản phẩm"
        :visible.sync="dialogVisible"
        width="50%"
        style="text-align: left"
        >
      <el-row :gutter="20">
        <el-col :span="10">
          <Upload :isOpen="open" @onChangeImage="changeImage" @deleteImage="deleteImage"/>
        </el-col>
        <el-col :span="14">
          <el-form :model="ruleForm" :label-position="label" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
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
        </el-col>
      </el-row>
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
          prop="name">
        <template slot-scope="scope">
          <div v-if="scope.row.image" class="product-img"
             style="
             align-items: center;
             display: flex;
             float: left;
             margin-right: 10px;"
          >
            <img style="width: 23px; height: 23px; border-radius: 50%;" :src="baseUrl + scope.row.image" alt=""></div>
          <div v-else class="product-img"
               style="
             align-items: center;
             display: flex;
             float: left;
             margin-right: 10px;"
          >
            <img style="width: 23px; height: 23px; border-radius: 50%;" src="data:image/png;base64,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" alt=""></div>
          {{ scope.row.name }}
        </template>
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
import Upload from "@/components/Homeworks/Session10/Upload";
export default {
  components: {
    Upload
  },

  data() {
    return {
      tableData: [],
      search: '',
      label: 'top',
      dialogVisible: false,
      editModal: false,
      ruleForm: {
        name: '',
        description: '',
        price: ''
      },
      image: '',
      open: false,
      openEdit: false,
      total: 0,
      idEdit: '',
      baseUrl: 'http://vuecourse.zent.edu.vn/storage/',
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
      },
      productImg: ''
    }
  },
  watch: {
    dialogVisible (value) {
      if (value) {
        this.image = ''
        this.open = true
      } else {
        this.open = false
      }
    },
    editModal (value) {
      if (value) {
        this.image = ''
        this.openEdit = true
      } else {
        this.openEdit = false
      }
    },
  },
  methods: {
    createProduct() {
      this.dialogVisible = true
      this.ruleForm.name = ''
      this.ruleForm.description = ''
      this.ruleForm.price = ''
    },
    handleEdit(index, row) {
      this.editModal = true
      this.ruleForm.name = row.name
      this.ruleForm.description = row.description
      this.ruleForm.price = row.price
      this.idEdit = row.id
      if (row.image) {
        this.productImg = 'http://vuecourse.zent.edu.vn/storage/' + row.image
      }
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
      const frmData = new FormData()
      frmData.append('name', this.ruleForm.name)
      frmData.append('description', this.ruleForm.description)
      frmData.append('price', this.ruleForm.price)
      if (this.image) {
        frmData.append('image', this.image)
      }
      axios({
        method: 'post',
        url: 'http://vuecourse.zent.edu.vn/api/products/' + id,
        data: frmData
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
    storeProduct() {
      const frmData = new FormData()
      frmData.append('name', this.ruleForm.name)
      frmData.append('description', this.ruleForm.description)
      frmData.append('price', this.ruleForm.price)
      if (this.image) {
        frmData.append('image', this.image)
      }
      axios({
        method: 'post',
        url: 'http://vuecourse.zent.edu.vn/api/products',
        data: frmData
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
    },
    changeImage(image) {
      this.image = image
    },
    deleteImage() {
      this.image = ''
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
      .container > .product-img {
        align-items: center;
        display: flex;
        float: left;
        margin-right: 10px;
      }
    }
    .pagination {
      text-align: right;
      padding-right: 30px;
      margin-top: 20px;
    }
  }
</style>
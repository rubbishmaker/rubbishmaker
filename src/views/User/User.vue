<template>
  <div>
    <el-card class="el-card">
      <el-input
        class="el-input"
        v-model="input"
        placeholder="请输入内容"
        clearable
        @clear="cleared"
      ></el-input>
      <el-button type="primary" icon="el-icon-search" @click="searchContent"
        >搜索</el-button
      >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          show-overflow-tooltip
          :prop="key"
          :label="item"
          v-for="(item, key) in tableLabel"
          :key="key"
        >
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete($event, scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "User",

  data() {
    return {
      input: "",
      tableData: [],
      tableDataCopy: [],
      tableLabel: {
        date: "注册时间",
        name: "姓名",
        address: "住址",
      },
    };
  },

  created() {
    this.$axios.get("http://localhost:3000/getUserInfo").then((response) => {
      this.tableData = response.data;
      this.tableDataCopy = response.data;
    });
  },
  methods: {
    searchContent() {
      this.tableData = this.tableData.filter((item) => {
        return (
          item.name.search(this.input) !== -1 ||
          item.date.search(this.input) !== -1 ||
          item.address.search(this.input) !== -1
        );
        // item.date.search(this.input)
        // item.address.search(this.input)
      });
    },
    handleEdit(index, row) {
      this.$router.push({ name: "form" });
      console.log(index, row);
    },
    handleDelete(event, index, row) {
      this.$axios.get(`http://localhost:3000/removeUserInfo?_id=${row._id}`);
      this.tableData = this.tableData.filter((item) => {
        return item._id !== row._id;
      });
    },
    cleared() {
      this.tableData = this.tableDataCopy;
    },
  },
};
</script>

<style scoped>
.el-input {
  width: 400px;
}
.el-card {
  margin: 50px;
}
.el-icon-search {
  font-size: 20px;
}
</style>
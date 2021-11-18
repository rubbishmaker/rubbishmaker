<template>
  <div>
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="ruleForm"
      ref="ruleForm"
      :rules="rules"
    >
      <el-form-item label="注册时间">
        <el-input v-model="ruleForm.date" class="el-input"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="ruleForm.name" class="el-input"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="ruleForm.address" class="el-input"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="back">取消</el-button>
      </el-form-item>
    </el-form>

    >
    <el-dialog title="提示" :visible="dialogVisible" width="30%">
      <span>确定要新增此用户吗?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Qs from "qs";
export default {
  name: "Form",
  data() {
    return {
      dialogVisible: false,
      labelPosition: "right",
      ruleForm: {
        date: "",
        name: "",
        address: "",
      },
      rules: {
        date: [{ required: true, trigger: "blur", message: "必须要注册时间" }],
        name: [{ required: true, trigger: "blur", message: "必须要求有姓名" }],
        address: [
          { required: true, trigger: "blur", message: "必须要求有地址" },
        ],
      },
    };
  },
  methods: {
    back() {
      this.$router.replace({ name: "user" });
    },
    onSubmit(ruleForm) {
      this.dialogVisible = true;
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          let { date, name, address } = this.ruleForm;
          let data = { date, name, address };
          this.$axios({
            method: "POST",
            url: "http://localhost:3000/addUserInfo",
            data: Qs.stringify(data),
          }).then(this.back());
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.el-card {
  padding: 50px;
  width: 100%;
  height: 100%;
}
.el-input {
  width: 180px;
}
</style>
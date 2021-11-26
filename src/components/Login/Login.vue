<template>
  <div>
    <el-card class="el-card">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="admin">
          <el-input
            type="text"
            v-model="ruleForm.admin"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        admin: "",
        password: "",
      },
      rules: {
        admin: [{ require: true, trigger: "blur" }],
        password: [{ require: true, trigger: "blur" }],
      },
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let { admin, password } = this.ruleForm;
          if (admin == "admin" && password == "123456") {
            this.$store.commit("LoginState");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.el-card {
  width: 300px;
  height: 200px;
  margin: 110px auto;
}
</style>
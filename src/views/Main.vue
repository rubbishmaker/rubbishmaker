<template>
  <div class="root">
    <div v-if="!isLogin"><Login /></div>
    <div v-else>
      <el-container style="height: 100vh">
        <el-aside width="auto"><Nav /></el-aside>
        <el-container>
          <el-header><Header /></el-header>
          <el-main><router-view /></el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import Login from "../components/Login/Login";
import Nav from "../components/Nav.vue";
import Header from "../components/Header.vue";
// import {mapState} from
export default {
  data() {
    return {};
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  name: "Main",
  components: { Nav, Header, Login },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
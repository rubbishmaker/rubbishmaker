<template>
  <header class="header">
    <div class="l-content">
      <el-button
        type="primary"
        icon="el-icon-arrow-left"
        size="mini"
        @click="clooapseMenu"
      ></el-button>
    </div>
    <div>
      <el-tag
        v-for="item in menu"
        :key="item.name"
        class="el-tag"
        @click="go(item)"
        effect="dark"
        >{{ item.label }}</el-tag
      >
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img :src="imgSrc" alt="" class="picstyle" /><i
            class="el-icon-arrow-down el-icon--right"
          ></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      imgSrc: require("../assets/images/pic.jpg"),
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "Mallmanage/Mallmanage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
      ],
    };
  },
  methods: {
    clooapseMenu() {
      this.$store.commit("clooapseMenu");
    },
    go(item) {
      this.$router.push({
        path: item.name,
      });
    },
  },
};
</script>

<style scoped>
.el-tag {
  margin: 10px 10px;
}
.header {
  color: white;
  background-color: rgba(31, 30, 30, 0.7);
  display: flex;
  justify-content: space-between;
}
.picstyle {
  margin-top: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50% 50%;
}
</style>
<template>
  <div class="root">
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
      <h1 v-show="!isCollapse">后台管理系统</h1>
      <h3 v-show="isCollapse" class="h3">后台</h3>

      <el-menu-item
        :index="item.path"
        v-for="item in noChildren"
        :key="item.path"
        @click="navigatorTo(item)"
      >
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>

      <el-submenu
        :index="item.label"
        v-for="item in hasChildren"
        :key="item.path"
        @click="navigatorTo(item)"
      >
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="subItem.path"
            v-for="subItem in item.children"
            :key="subItem.label"
            @click="navigatorTo(subItem)"
            >{{ subItem.label }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>


<script>
export default {
  data() {
    return {
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
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    navigatorTo(item) {
      this.$router.push({ name: item.name ? item.name : "page1" });
    },
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.isCollapse;
    },
  },
};
</script>
<style scoped>
.root {
  height: 100%;
  background-color: rgba(165, 161, 161);
}
.h3 {
  font-size: 16px;
}
.el-menu-vertical-demo {
  background-color: rgba(165, 161, 161, 0.5);
}
</style>
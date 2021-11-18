<template>
  <el-row :gutter="20" type="flex">
    <el-col :span="8" class="el-colOne"
      ><el-card shadow="always">
        <img :src="userImg" class="image" />
        <span>Admin</span>
        <span>超级管理员</span>
        <hr />
        <div class="login-message">
          <p>上次登录时间 : 2019.10.01</p>
          <p>上次登录地点 : 北京</p>
        </div>
      </el-card>
      <el-card style="margin-top: 19.999974px" shadow="always">
        <el-table :data="tableData">
          <el-table-column
            show-overflow-tooltip
            :prop="key"
            :label="item"
            v-for="(item, key) in tableLabel"
            :key="key"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" class="xxxxxx">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.index"
          class="el-crad"
          shadow="always"
        >
          <i
            :class="`el-icon-${item.icon}`"
            :style="`backgroundColor:${item.color}; fontSize:30.000014px`"
          ></i>
          <div class="detail">
            <p>{{ item.name }}</p>
            <p>￥{{ item.value }}</p>
          </div>
        </el-card>
      </div>

      <el-card
        ref="echarts"
        class="echarts"
        shadow="always"
        id="echarts"
      ></el-card>
      <el-card class="echarts" shadow="always" id="echartsbar"></el-card>
    </el-col>
  </el-row>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts";
import echartsfunction from "../../utils/echarts";
export default {
  name: "Home",
  data() {
    return {
      userImg: require("../../assets/images/pic.jpg"),
      tableLabel: {
        name: "机型",
        price: "单价",
        todayBuy: "今日购买",
        weekBuy: "周购买",
        totalBuy: "总购买",
      },
      tableData: [],
      countData: [],
      echartsData: {},
      activeUser: {},
    };
  },
  mounted() {
    //mockjs模拟生成的数据
    this.$axios({
      url: "http://localhost:3000/gethome",
    })
      .then((res) => {
        this.tableData = res.data.tableData;
        const dataArr = res.data.tableData;
        const myChart = echarts.init(document.querySelector("#echarts"));
        myChart.setOption(
          echartsfunction(
            "销量总表",
            "item",
            "category",
            ["单价", "今日购买", "周购买", "总购买(x10)", "周利润(万)"],
            "value",
            (function () {
              let serie = [];
              dataArr.map((item) => {
                let data = {
                  name: item.name,
                  type: "line",
                  data: [
                    item.price,
                    item.todayBuy,
                    item.weekBuy,
                    item.totalBuy / 10,
                    item.weekProfits / 10000,
                  ],
                };
                serie.push(data);
              });
              return serie;
            })()
          )
          // {
          //   name: "oppo",
          //   type: "line",
          //   data: [
          //     this.tableData[0].price,
          //     this.tableData[0].todayBuy,
          //     this.tableData[0].weekBuy,
          //     this.tableData[0].totalBuy / 1000,
          //     this.tableData[0].weekProfits / 10000,
          //   ],
          // },
          // {
          //   name: "vivo",
          //   type: "line",

          //   data: [
          //     this.tableData[1].price,
          //     this.tableData[1].todayBuy,
          //     this.tableData[1].weekBuy,
          //     this.tableData[1].totalBuy / 1000,
          //     this.tableData[1].weekProfits / 10000,
          //   ],
          // },
          // {
          //   name: "苹果",
          //   type: "line",

          //   data: [150, 232, 201, 154, 190, 330, 410],
          // },
          // {
          //   name: "小米",
          //   type: "line",

          //   data: [320, 332, 301, 334, 390, 330, 320],
          // },
          // {
          //   name: "三星",
          //   type: "line",

          //   data: [820, 932, 901, 934, 1290, 1330, 1320],
          // },
          //   {
          //     title: {
          //       text: "销量总表",
          //     },
          //     tooltip: {
          //       trigger: "item",
          //     },
          //     legend: {
          //       data: ["oppo", "vivo", "苹果", "小米", "三星"],
          //     },
          //     grid: {
          //       left: "3%",
          //       right: "5%",
          //       bottom: "3%",
          //       containLabel: true,
          //     },
          //     toolbox: {
          //       feature: {
          //         saveAsImage: {},
          //       },
          //     },
          //     xAxis: {
          //       type: "category",
          //       boundaryGap: false,
          //       data: ["单价", "今日购买", "周购买", "总购买(x10)", "周利润(万)"],
          //     },
          //     yAxis: {
          //       type: "value",
          //     },
          //     series: (function () {
          //       let serie = [];
          //       dataArr.map((item) => {
          //         let data = {
          //           name: item.name,
          //           type: "line",
          //           data: [
          //             item.price,
          //             item.todayBuy,
          //             item.weekBuy,
          //             item.totalBuy / 10,
          //             item.weekProfits / 10000,
          //           ],
          //         };
          //         serie.push(data);
          //       });
          //       return serie;
          //     })(),
          //   },
          //   true
          // );
        );
      })
      .catch((e) => console.log(e));
    this.$axios({
      url: "http://localhost:3000/dealData",
    })
      .then((res) => (this.countData = res.data.countData))
      .catch((e) => console.log(e));
    this.$axios({
      url: "http://localhost:3000/userInfo",
    })
      .then((res) => {
        const activeUserData = res.data.userInfo.activeUser;
        const enactiveUserData = res.data.userInfo.enactiveUser;
        const myChartbar = echarts.init(document.querySelector("#echartsbar"));
        myChartbar.setOption(
          echartsfunction(
            "活跃情况",
            "item",
            "category",
            ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            "value",
            [
              { name: "活跃用户", data: activeUserData, type: "bar" },
              { name: "不活跃用户", data: enactiveUserData, type: "bar" },
            ]
          )
        );
      })
      .catch((e) => console.log(e, "wwww"));
  },
};
</script>
<style scoped>
.echarts {
  width: 520px;
  height: 180px;
}
* {
  margin: 0;
  padding: 0;
}
.image {
  width: 99.999976px;
  height: 99.999976px;
  border-radius: 50% 50%;
}
.el-colOne {
  margin-left: 19.999974px;
  margin-top: 19.999974px;
  height: 400.00001px;
}
.login-message {
  font-size: 14.000003px;
}
.el-crad {
  margin: 9.999987px 9.999987px;
  width: 150.000017px;
  height: 99.999976px;
}
.num {
  display: flex;
  flex-wrap: wrap;
}
.detail {
  font-size: 11.999995px;
}
</style>
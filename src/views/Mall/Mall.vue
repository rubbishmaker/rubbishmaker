<template>
  <div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide
        v-for="item in menuData"
        :key="item.name"
        class="swiper-slide"
      >
        <div class="modelName">{{ item.realName }}</div>
        <img :src="imgSrc(item, 1)" alt="" />
        <img :src="imgSrc(item, 2)" alt="" />
        <img :src="imgSrc(item, 3)" alt="" />
        <img :src="imgSrc(item, 4)" alt="" />

        <h3>产品优势:</h3>
        <br /><br />
        <p class="p1">{{ item.message }}</p>
        <div>
          官网地址:
          <a :href="item.webLink" class="a">{{ item.realName }}网站</a>
        </div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>


<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

// Import Swiper styles
import "swiper/swiper-bundle.css";
export default {
  name: "Mall",
  components: { swiper, swiperSlide },
  methods: {
    imgSrc(item, index) {
      return require("../../assets/images/" + item.name + index + ".png");
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      menuData: [
        {
          models: "oppo",
          name: "oppo",
          realName: "oppo",
          message: `体重很轻 防水很行未来感十足
          一体流线设计，打破影像镜组与机身的边界，于方寸间展现你对未来的展望`,
          webLink: "https://www.opposhop.cn",
        },
        {
          models: "vivo",
          name: "vivo",
          realName: "vivo",
          message: `超逆光纯净夜景
          还原夜本色， 夜拍更写实。 蔡司 T*镀膜加持，自研 AI 抗眩光算法及
          RAWHDR3.0 算法，三重去眩光，还原夜 景纯净本色`,
          webLink: "https://www.vivo.com.cn",
        },
        {
          models: "苹果",
          name: "iPhone",
          realName: "iPhone",
          message: `全新超广角摄像头， 让照片暗部表现更细腻。 全新广角摄像头，光线
          捕捉能力增加 47%，提升照片和视频的品质。
          新增传感器位移式光学图像防抖功能，就算手不稳，画面照样稳`,
          webLink: "https://www.apple.com.cn",
        },
        {
          models: "小米",
          name: "xiaomi",
          realName: "小米",
          message: `120W 神仙秒充 只需 15 分钟，电量充满 Pro+ 版本配备满血
          120W 神仙秒充，带来令人惊叹的充电速度，等效 4500mAh 大电池在疾速模式下
          15 分钟即可充满*。 相同的 15 分钟，更快的充电体验`,
          webLink: "https://www.mi.com",
        },
        {
          models: "三星",
          name: "sanxing",
          realName: "三星",
          message: `S9+配备了广角与长焦的双1200万摄像头，实现2倍光学变焦和实时虚化功能，
          另外还加入了F1.5-F2.4的可变式光圈设计，可以自动或手动调节物理光圈大小来调整进光量、锐度和景深效果，
          同时还具有双光学防抖、10倍数码变焦、以及全新的凝时拍摄、动态萌拍以及暗光美拍的出色效果，让你爱不释手，乐享意境之美，放慢你的世界`,
          webLink: "https://www.samsungeshop.com.cn",
        },
      ],
    };
  },
  mounted() {},
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.recommendPage img {
  margin: 19.999974px 19.999974px;
  padding: 19.999974px 9.999987px;
  width: 99.999976px;
  height: 150.000017px;
}
.recommendPage .span {
  position: absolute;
  top: 0px;
  font-size: 19.999974px;
  color: coral;
}
.modelName {
  text-align: center;
}
.p1 {
  padding: 0 20px;
}
.a:hover {
  background-color: coral;
}
</style>
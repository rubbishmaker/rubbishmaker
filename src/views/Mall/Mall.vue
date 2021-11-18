<template>
  <div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in menuData" :key="item.name">
        <img :src="imgSrc(item, 1)" alt="" />
        <img :src="imgSrc(item, 2)" alt="" />
        <img :src="imgSrc(item, 3)" alt="" />
        <img :src="imgSrc(item, 4)" alt="" />
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
        { models: "oppo", name: "oppo" },
        { models: "vivo", name: "vivo" },
        { models: "苹果", name: "iPhone" },
        { models: "小米", name: "xiaomi" },
        { models: "三星", name: "sanxing" },
      ],
    };
  },
  mounted() {
    console.log(this.swiper);
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.recommendPage img {
  margin: 20px 20px;
  padding: 20px 10px;
  width: 100px;
  height: 150px;
}
.recommendPage .span {
  position: absolute;
  top: 0px;
  font-size: 20px;
  color: coral;
}
</style>
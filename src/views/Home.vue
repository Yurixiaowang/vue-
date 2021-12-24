<template>
  <div class="home">
    <Slider @tabChange="onTabChange"/>
    <Banner :src='bannerSrc'/>
    <Recommend v-show="!showVideo"/>
    <VideoList v-show="showVideo"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Slider from '@/components/Slider.vue'
import Banner from '@/components/Banner.vue'
import Recommend from '@/components/Recommend.vue'
import VideoList from '@/components/VideoList.vue'
@Component({
  components: {
    Slider,
    Banner,
    Recommend,
    VideoList
  },
})
export default class Home extends Vue {
  readonly BANNER_LIST = [
    "https://seopic.699pic.com/photo/50113/4609.jpg_wh1200.jpg",
    "https://seopic.699pic.com/photo/50074/6687.jpg_wh1200.jpg",
    "https://seopic.699pic.com/photo/50131/2125.jpg_wh1200.jpg",
    "https://seopic.699pic.com/photo/50169/8271.jpg_wh1200.jpg"
  ]

  bannerSrc: string = this.BANNER_LIST[0]
  showVideo = false
  
  // 改变 tab 时，banner 随之改变
  onTabChange(idx: number) {
    this.showVideo = idx === 1 ? true : false
    this.bannerSrc = this.BANNER_LIST[idx]
  }
}
</script>

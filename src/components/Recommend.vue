<template>
  <div class="recommend">
    <h3>推荐</h3>
    <div class="recommend-container">
      <div class="recommand-item"
        v-for="(item, idx) in list"
        :key="item.text"
        :class="{activeHover: idx === activeIndex}"
        @click="handleJumpList(idx)"
      >
        <img :src="item.image" alt="">
        <span>{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { HomeRecommend } from '../services/types'
import api from '../services/index'
import { RouteNames } from '../router/index'

@Component
export default class Recommend extends Vue {
  list: HomeRecommend[] = []
  activeIndex = -1

  handleJumpList(idx: number) {
    this.activeIndex = idx
    setTimeout(() => {  // 点击的时候，让用户视觉上可以看出哪个被点击了，模拟点击下去的效果
      this.$router.push({
        name: RouteNames.List
      })
    }, 200)
  }
  async created() { 
    this.list = await api.getHomeRecommend()
  }
}
</script>
<style lang="stylus" scoped>
.recommend
  h3
    font-weight bold
    font-size 1.6rem
  .recommend-container
    display flex
    flex-wrap wrap
    justify-content space-evenly
    .recommand-item
      width 10.6rem
      height 10.6rem
      margin-bottom 3rem
      background gray
      border-radius .3rem
      box-shadow 0 .3rem .3rem -.2rem rgb(106,182,252,0.5)
      &.activeHover
        transform translate3d(1px, 1px, 0)
      img
        border-radius .3rem
        width 100%
        height 100%

</style>
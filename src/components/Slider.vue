<template>
  <div class="slider">
    <ul>
      <li 
        v-for="(item, idx) in tabs" 
        :key="item + idx" 
        class="tab-item" 
        :class="{active: activeTab === idx}"
        @click="changeActiveTab(idx)"
        >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Slider extends Vue {
  tabs: string[] = ['推荐', '视频', '娱乐', '文章', '发现', '小说', '交友', '我的']
  activeTab = 0

  changeActiveTab(v: number) {
    this.activeTab = v
    this.$emit('tabChange', v)
  }
}
</script>
<style lang="stylus" scoped>
.slider
  margin 2rem 0 0
  ul
    display flex
    align-items center
    overflow scroll
    &::-webkit-scrollbar
      width 0
    .tab-item
      flex: 0 0 25%
      color #353535
      text-align center
      font-size 1.6rem
      line-height 2.6rem
      transition all .3s ease-in-out
      &.active
        font-weight bold
        color #3a3a3a
        transform: scale(1.2)
</style>
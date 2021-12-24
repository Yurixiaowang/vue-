<template>
  <div class="list">
    <div class="input-container">
      <input type="text" v-model="search" class="input">
    </div>
    <div class="list-container">
      <div class="list-item"
        v-for="item in currentList"
        :key="item.id"
        @click="toDetail(item.id)"
      >
        <div class="left">
          {{getRandomEmoji()}}
        </div>
        <div class="right">
          <span class="title">{{item.title}}</span>
          <span class="desc">{{item.content}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { RouteNames } from '@/router';
import { Component, Vue } from 'vue-property-decorator';
import api from '../services/index'
import {DetailInfo} from '../services/types'
@Component({
  components: {
  },
})
export default class List extends Vue {
  readonly emojiList = ["😨", "🤡", "👻", "👩", "💖"]
  search = '' // 搜索的关键子
  textList: DetailInfo[] = []  // 请求到的原数据

  get currentList() {
    return this.textList.filter(item => item.title.indexOf(this.search) > -1)  // 根据关键字查询到的要展示的列表数据
  }

  // 获取随机表情
  getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * 5) // [0, 5)
    return this.emojiList[randomIndex]
  }

  toDetail(id: number) {
    // TODO 跳转到详情页
    this.$router.push({
      name: RouteNames.Detail,
      params: {
        id: String(id)
      }
    })
  }

  async created () {
    this.textList = await api.getListData()
    this.$store.commit('setDetailInfo', this.textList)
  }
}
</script>
<style lang="stylus" scoped>
.input-container
  position sticky
  top 0
  height 6rem
  background-color #fff
.input
  outline-style none
  border 1px solid #ccc
  border-radius .3rem
  padding 1rem
  width 60%
  margin 1rem auto
  text-align center
.list-item
  background-color white
  box-shadow 0 0 1rem rgba(144,144,144,0.15)
  height 10rem
  border-radius .5rem
  display flex
  align-items center
  justify-content center
  padding 1rem
  margin-top 1.5rem
  .left
    width 7rem
    height 7rem
    display flex
    justify-content center
    align-items center
    font-size 2.5rem
    font-weight bold
    color #fff
    background #6ab6fc
    border-radius 1rem
  .right
    margin-left 1rem
    flex 1
    display flex
    align-items center
    justify-content center
    flex-direction column
    .title
      font-size 1.4rem
      font-weight bold
      text-align left
      display inline-block
      width 100%
    .desc
      margin-top 1rem
      font-size 1.2rem
      text-align left

      // 展示两行 超出部分省略号
      text-overflow ellipsis
      display -webkit-box
      -webkit-line-clamp 2
      overflow hidden
      -webkit-box-orient vertical
</style>

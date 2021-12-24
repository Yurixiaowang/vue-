<template>
  <div class="detail">
    <img :src="image" alt="" class="img">
    <div class="content-container">
      <h1>{{title}}</h1>
      <div class="content">{{content}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DetailInfo } from '../services/types'
@Component({
  components: {
  },
})
export default class Detail extends Vue {
  title = ''
  image = ''
  content = ''

  get id () {
    return this.$route.params.id
  }

  created() {
    const storeData = this.$store.state.detailInfo as DetailInfo[]
    const currentData = storeData.filter(item => String(item.id) === this.id)[0]
    this.title = currentData.title
    this.image = currentData.image
    this.content = currentData.content
  }
}
</script>
<style lang="stylus" scoped>
.detail
  position relative
  height 100vh
  .img
    width 100%
    height 30rem
  .content-container
    .content
      white-space pre-wrap
      text-align left
</style>

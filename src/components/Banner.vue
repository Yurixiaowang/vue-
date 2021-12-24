<template>
  <div class="container">
    <img :src="src" alt="" class="banner">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Slider extends Vue {
  @Prop({
    type: String,
    default: ""
  }) src!: string
}
</script>
<style lang="stylus" scoped>
.banner
  width 100%
  height auto
  border-radius .3rem
</style>
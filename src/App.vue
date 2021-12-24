<template>
  <div id="app">
    <transition :name="transitionName">
       <keep-alive :include="keepAliveNames">
          <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
    </transition>
    <transition :name="transitionName">
      <router-view v-if="!$route.meta.keepAlive" />
    </transition>
  </div>
</template>
<script>
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";

@Component({
    components: {}
})
export default class App extends Vue {
    keepAliveNames = [];
    transitionName = "";

    @Watch("$route")
    onRouteChange(to, from) {
        this.transitionName =
            to.meta.depth > from.meta.depth ? "slide-left" : "slide-right"
    }
}
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

html
  width 100%
  height 100%
  font-size 10px
// 实际的 px = html.font-size * rem
@media only screen and (max-width: 338px)
  html
    font-size 9px !import


// iPhone Plus
@media only screen and (max-width: 411px)
  html
    font-size 11px !import


// Android Pad
@media only screen and (max-width: 450px)
  html
    font-size 12px !import
@media only screen and (max-width: 525px)
  html
    font-size 14px !import


// Nexus 7
@media only screen and (max-width: 600px)
  html
    font-size 16px !import


// iPad or Browser
@media only screen and (max-width: 768px)
  html
    font-size 20px !import

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active
    will-change transform
    transition transform 350ms
    position absolute
    overflow hidden
.slide-right-enter,
.slide-left-leave-active
  transform: translate(-100%, 0)
.slide-right-leave-active,
.slide-left-enter
  transform: translate(100%, 0)
</style>

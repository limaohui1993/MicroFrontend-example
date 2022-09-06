<template>
  <div id="app">
    <div> 
      <Parcel :config="parcelConfig" :mountParcel="mountParcel " ></Parcel>
      <router-link to="/foo">foo</router-link>
      <router-link to="/bar">bar</router-link>
      <button @click="handleClick">button</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Parcel from "single-spa-vue/dist/esm/parcel"
import {mountRootParcel} from 'single-spa';
export default {
  name: 'App',
  components: {
    Parcel
  },
  data() {
    return {
      parcelConfig: window.System.import("@study/navbar"),
      mountParcel: mountRootParcel
    }
  },
  async mounted () {
    const toolsModule=await window.System.import("@study/tools");
    //发布订阅
    toolsModule.sharedSubject.subscribe(console.log)
  },
  methods: {
   async handleClick() {
      const toolsModule=await window.System.import("@study/tools");
      toolsModule.sayHello("@study/realworld")
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

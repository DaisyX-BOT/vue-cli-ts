<template>
  <div style="height:100%" id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'Vue-Property-Decorator';
import axios from './axios/index';
import {State, Getter, Action, Mutation, namespace} from 'vuex-class';
import { setTimeout } from 'timers';
@Component({
  name: 'app'
})

export default class App extends Vue {
  // 将vuex里面的值赋给变量
  @State('count') stateFoo: any;
  // @Getter('ccc') getterFoo:any

  // 获取vuex里面的值
  @State login: any;
  @State count: any;
  // mounted(){
  //   const _this =this;
  //    // 页面初始化触发
  //   //_this.appHeight();
  //   // 浏览器窗口大小改变触发
  //   window.onresize = function(){
  //    // _this.appHeight();
  //   }
  //   // 滚动态状态改变触发
  //   window.onscroll= function(){
  //     //_this.appHeight();
  //   }
  // }
// 解决页面高度自适应问题, 当body(app高度随body变化)高度小于可视窗口高度时,让body等于可视窗口高度, 否则让body随内容高度自适应
  // appHeight(){
  //     let appCss:any = document.getElementById('app');
  //     if (document.body.scrollHeight >document.documentElement.scrollHeight ) {
  //         appCss.style.height="auto";
  //     }else{
  //       appCss.style.height=document.body.scrollHeight+'px';
  //     }
  //   }
}
</script>
<style>
  #app{
    min-width:1150px;
  }
.cl:after{
  content:"";
  display: block;
  clear: both;
  overflow: hidden;
  height: 0;
  visibility: hidden;
}
.cl{
  zoom:1;
}

</style>


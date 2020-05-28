<template>
    <div class="content">
        <div class="box">

            <div  class="viewbox">

                <router-view style="height: 100%"/>
            </div>

        </div>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Router from '../../router';
Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate' // for vue-router 2.2+
]);

@Component({
    name: 'Content',
    components: {
    }
})
export default class Content extends Vue {
    checkedFlagNum: number = 0;
    showReturnFlag: boolean = false;

    created() {
        //
    }
    returnRoute() {
        this.$router.go(-1);
    }
    mounted() {
    }
    beforeRouteEnter(to: any, from: any, next: any) {
        next();
    }
    beforeRouteUpdate(to: any, from: any, next: any) {

        next();
    }

}
</script>

<style lang="scss" scoped>
.content{
    // width: 1660px;
    width: 100%;
    height: 100%;
    position: relative;
    .box{
        height:100%;
        background: #f3f4f9;
        .viewbox{
            height: calc(100% - 52px);
        }
    }
}

</style>
<style>
.itemContentScrollbar{
  height: 100%;
}
.itemContentScrollbar .el-scrollbar__wrap {
  overflow: auto;
  overflow-x: hidden;
}
.itemContentScrollbar .el-scrollbar__bar{
  width: 8px;
  z-index: 3000;
}
.itemContentScrollbar .is-horizontal{
  z-index: 1000;
  display: none;
}
.itemContentScrollbar .is-vertical{
  z-index: 1000;
}
::-webkit-scrollbar {
    width:6px;
    height:6px;
}
::-webkit-scrollbar-button    {
    display: none;
}
::-webkit-scrollbar-track     {
    background:#FF66D5;
}
::-webkit-scrollbar-track-piece {
    background:#fff;
}
::-webkit-scrollbar-thumb{
    background:#DDDEE0;
    border-radius:3px;
}
::-webkit-scrollbar-corner {
    background:#fff;
}
</style>


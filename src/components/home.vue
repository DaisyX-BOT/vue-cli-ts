<template>
    <div class="home">
        <div class="box">
            <div class="view-scroll-bar-content">
                <router-view style="height: 100%"/>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({

})
export default class Home extends Vue {
    created() {
        //
    }
}
</script>

<style lang="scss" scoped>
.home{
    height: 100%;
    position: relative;
    .box{
        height:100%;
        background: #fff;
        .view-scroll-bar-content {
            height: 100%;
        }
    }
}

</style>

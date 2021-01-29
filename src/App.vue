<template>
  <div>
    <!-- html中使用 ~ -->
    <main-tab-bar></main-tab-bar>
    <router-view/>

  </div>

</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  export default {
    name:'App.vue',
    components:{
      MainTabBar
    }
  }
</script>

<style>
  @import url('assets/css/base.css');
</style>

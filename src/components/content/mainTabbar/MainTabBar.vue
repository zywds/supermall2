<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home' activeColor="blue">
        <template v-slot:slot-icon>
          <!-- <img src="assets/img/tabbar/home.png" alt=""> -->
          <img src="~assets/img/tabbar/home.png" alt="">
        </template>
        <template v-slot:slot-icon-active>
          <img src="~assets/img/tabbar/home-active.png" alt="">
        </template>
        <template v-slot:slot-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor="blue">
        <template v-slot:slot-icon>
          <img src="~assets/img/tabbar/category.png" alt="">
        </template>
        <template v-slot:slot-icon-active>
          <img src="~assets/img/tabbar/category-active.png" alt="">
        </template>
        <template v-slot:slot-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <template v-slot:slot-icon>
          <img src="~assets/img/tabbar/cart.png" alt="">
        </template>
        <template v-slot:slot-icon-active>
          <img src="~assets/img/tabbar/cart-active.png" alt="">
        </template>
        <template v-slot:slot-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <template v-slot:slot-icon>
          <img src="~assets/img/tabbar/profile.png" alt="">
        </template>
        <template v-slot:slot-icon-active>
          <img src="~assets/img/tabbar/profile-active.png" alt="">
        </template>
        <template v-slot:slot-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name:'MainTabBar',
    data () {
      return {
      }
    },
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
</style>

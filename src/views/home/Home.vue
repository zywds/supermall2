<template>
  <div>
    <nav-bar navbarBColor="gray">
      <template v-slot:navbarCenter>
        <div>
          首页内容
        </div>
      </template>
    </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
   import NavBar from 'components/common/navbar/NavBar'
   import {getHomeMultidata} from 'network/home.js'
   import HomeSwiper from './childComps/HomeSwiper'
   import HomeRecommendView from './childComps/HomeRecommendView'

   export default {
    name:'Home',
    data () {
      return {
        banners:[],
        dkeywords:[],
        recommends:[]
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommendView
    },
    created(){
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list
        console.log(this.banners);
        this.dkeywords = res.data.dKeyword.list
        console.log(this.dkeywords);
        this.recommends = res.data.recommend.list
        console.log(this.recommends);
      },error => {
        console.log(error);
      })
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <nav-bar navbarBColor="gray">
      <template v-slot:navbarCenter>
        <div>
          首页内容
        </div>
      </template>
    </nav-bar>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img style="width:100%" :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
   import NavBar from 'components/common/navbar/NavBar'
   import {getHomeMultidata} from 'network/home.js'
   import {Swiper,SwiperItem} from 'components/common/swiper'
   export default {
    name:'Home',
    data () {
      return {
        banners:[],
        dkeywords:[]
      }
    },
    components:{
      NavBar,
      Swiper,
      SwiperItem
    },
    created(){
      getHomeMultidata().then(res => {
        //console.log(res);
        this.banners = res.data.banner.list
        console.log(this.banners);
        this.dkeywords = res.data.dKeyword.list
      },error => {
        console.log(error);
      })
    }
  }
</script>

<style scoped>

</style>

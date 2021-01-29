<template>
  <div>
    <nav-bar navbarBColor="gray">
      <template v-slot:navbarCenter>
        <div>
          首页内容
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
   import NavBar from 'components/common/navbar/NavBar'
   import {getHomeMultidata} from 'network/home.js'
   export default {
    name:'Home',
    data () {
      return {
        banners:[],
        dkeywords:[]
      }
    },
    components:{
      NavBar
    },
    created(){
      getHomeMultidata().then(res => {
        //console.log(res);
        this.banners = res.data.banner.list
        this.dkeywords = res.data.dKeyword.list
      },error => {
        console.log(error);
      })
    }
  }
</script>

<style scoped>

</style>

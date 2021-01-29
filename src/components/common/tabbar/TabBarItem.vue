<template>
  <div class="tabItem" @click="tabItemClick">
    <div v-if="active">
      <slot name="slot-icon"></slot>
    </div>
    <div v-else>
      <slot name="slot-icon-active"></slot>
    </div>
    <div :style="activeColorS">
      <slot name="slot-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'TabBarItem',
    data () {
      return {

      }
    },
    props:{
      path:{
        type:String,
        required:true
      },
      activeColor:{
        type:String,
        default:'red',
        required:true
      }
    },
    computed:{
      active(){
        //console.log(this.$route.path);
        return this.$route.path.startsWith(this.path)
      },
      activeColorS(){
        //console.log(this.activeColor);
        return this.active?{color:this.activeColor}:{}
      }
    },
    methods:{
      tabItemClick(){
        this.$router.push(this.path).catch(() => {})
      }
    }
  }
</script>

<style scoped>
  .tabItem{
    flex: 1;
    text-align: center;
    margin-top: 5px;

  }
  .tabItem img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
</style>

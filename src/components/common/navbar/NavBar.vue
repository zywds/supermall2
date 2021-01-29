<template>
  <div id="navbar" :style="navbarBColorS">
    <div class="navbarItem">
      <slot name="navbarLeft"></slot>
    </div>
    <div class="navbarItem">
      <slot name="navbarCenter"></slot>
    </div>
    <div class="navbarItem">
      <slot name="navbarRight"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'NavBar',
    data () {
      return {
      }
    },
    props:{
      navbarBColor:{
        type:String,
        default:'white'
      }
    },
    computed:{
      navbarBColorS(){
        return {backgroundColor:this.navbarBColor}
      }
    }
  }
</script>

<style scoped>
  #navbar{
    height: 44px;
    line-height: 44px;
    /* background-color: blanchedalmond; */
    display: flex;
    text-align: center;
    color: white;
    box-shadow: 0 1px 1px 0 rgba(100, 100, 100, .2);
  }
  .navbarItem:nth-child(1){
    flex: 1;
  }
  .navbarItem:nth-child(2){
    flex: 3;
  }
  .navbarItem:nth-child(3){
    flex: 1;
  }
</style>

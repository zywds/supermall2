<template>
  <div id="tab">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name:'TabBar',
    data () {
      return {
      }
    },
    components:{

    }
  }
</script>

<style scoped>
  #tab{
    height: 46px;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    box-shadow: 0 -1px 1px 0 rgba(100, 100, 100, .2);
  }

</style>

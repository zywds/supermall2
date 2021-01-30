<template>
  <div class="recommed">
    <!-- <div> -->
      <div class="recommedItem" v-for="(item,index) in recommends" :key="index">
        <a :href="item.link">
          <div>
            <img :src="item.image" :alt="item.title">
          </div>

          <div>{{item.title}}</div>
        </a>
      </div>
    <!-- </div> -->


  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props:{
      recommends:{
        type:Array,
        data(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommed{
    width: 100%;
    display: flex;
    padding-bottom: 20px;
    border-bottom: 10px solid #eee;

  }
  .recommedItem{
    flex: 1;
    margin: 7px;
    text-align: center;
    color: gainsboro;

  }
  /* .recommedItem:last-of-type{
    margin: 0;
  } */
  .recommedItem img{
    width: 100%;
    height: auto;
  }

</style>

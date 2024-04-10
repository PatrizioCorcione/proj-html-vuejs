<script>
import {store} from '../../store';
export default {
  data(){
    return{
      store,
    }
  },
  components:{
   
  },
  props:{
    imgP:String,
    titleP:String,
    descP:String,
    linckP:String,
  },
  methods: {
      getImagePath(imgPath) {
        return new URL(`../../assets/img/${imgPath}`, import.meta.url).href
      },
    },
}
</script>

<template>
  
  <a :href='linckP'>
    <div class="card mx-3 border-0">
      <img :src="getImagePath(imgP)" class="card-img-top rounded-0 " alt="...">
      <div class="card-body text-center ">
        <h5>{{ titleP }}</h5>
        <p class="card-text py-3">{{ descP }}</p>
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables.scss';
@import '../../assets/scss/partials/_tipography';
a{
  text-decoration: none;
}
.card{
  cursor: pointer;
  .card-img-top{
    transition: all 1s;
  }
  &:hover .card-img-top{
    opacity: 0.80;
  }
  .card-body{
    p{
      margin: 10px;
      font-size: $font-s;
      color: $tundra-clr;
    }
    .card-text{
      border-top: 1px solid $tundraLig-clr;
    }
  }
}


</style>
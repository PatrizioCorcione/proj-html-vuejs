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
    imgPa:String,
    titlePa:String,
    descPa:String,
    linckPa:String,
  },
  methods: {
    getImagePath(imgPath) {
        return new URL(`../../assets/img/${imgPath}`, import.meta.url).href
      },
    },
}
</script>

<template>
  <a :href=linckPa>
    <div class="card mx-3 text-bg-dark  border-0 ">
      <img :src=getImagePath(imgPa) class="card-img rounded-0" alt="...">
      <div class="card-img-overlay d-flex flex-column-reverse align-items-center ">
        <p class="card-text">{{descPa}}</p>
        <div class="fake-hr"></div>
        <h5 class="card-title">{{titlePa}}</h5>
      </div>
      <div class="bgc-black"></div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables.scss';
@import '../../assets/scss/partials/_tipography';
a{
  transition: all 0.6s;
  width: 56%;
  &:hover{
    scale: 1.1;
  }
}
h5{
  margin: 0;
}
p{
  color: $prymari-clr;
  font-size: $font-s;
}
img{
  height: 350px;
  object-fit: cover;
}
.fake-hr{
  margin: 10px 0px;
  border: 1px solid gray;
  width: 15%;
}
.card{
  cursor: pointer;
  transition: all 0.4s;
  &:hover{
    box-shadow: gray 5px 5px 13px 5px;
  }
  box-shadow: gray 5px 5px 5px 5px;
  border-radius: 0px 0px 30px 0px;
  overflow: hidden;
  .card-img-overlay{
    text-align:center;
    z-index: 9999;
  }
  .bgc-black{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: linear-gradient(to top, #000000af, #000000af , #0000004f , #33333300 );
  }
}

</style>
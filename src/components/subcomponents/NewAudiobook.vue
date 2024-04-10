<script>
import {store} from '../../store';
export default {
  data(){
    return{
      store,
    }
  },
 
}
</script>

<template>
  <div class="new-audiobook d-flex justify-content-center align-items-center ">
    <div>

      <img src="../../assets/img/audible-app-2x-400x418.png" alt="">
    </div>
      <div class="audiobook-right text-center ">
        <h3>New Audiobook</h3>
        <p class="text-shop">no time to read? no problem, listen to it</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br> Velit quam autem neque ab blanditiis id aliquam vel</p>
        <img src="../../assets/img/audible-logo.png" alt="">
        <img src="../../assets/img/bn-logo-tall.png" alt="">
        <img src="../../assets/img/kindle-logo-tall.png" alt="">
      </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables.scss';
@import '../../assets/scss/partials/_tipography';
.new-audiobook{
    padding-top: 70px;
    background-image: url(/src/assets/img/banner.jpg);
    .text-shop{
        font-size:$font-s ;
        color: $prymari-clr;
        text-transform: uppercase;
        font-weight: bold;
    }
    h3{
      font-family: "Playfair Display", serif;
      font-weight: bold;
      color: white;
    }
    p{
      color: $tundraLig-clr;
      font-size: $font-s;
    }
    .audiobook-right{
      img{
        width: 20%;
        margin-right: 20px;
      }
    }
  }
</style>
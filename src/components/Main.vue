<script>
import {store} from '../store';
import CardTestimonial from './subcomponents/CardTestimonial.vue'
export default {
  data(){
    return{
      store,
    }
  },
  components:{
    CardTestimonial,
  }
}
</script>

<template>

  <main class="py-5">
    <div class="text-center ">
      <h2>More about Damon Vaughn</h2>
      <h5>Damon Vaughn is  professor of psychology a the university of Toronto, a clynical psychologist <br> and the author of the multi-million copy bestseller " The story of my life"</h5>
      <span class="btn btn-success my-5 border-0 ">Meet the author</span>
    </div>
    <div class="references d-flex justify-content-center align-items-center  py-5">
      <img class="mx-3" src="../assets/img/ebay-logotan-2x-200x66.png" alt="">
      <img class="mx-3" src="../assets/img/audible-logotan-2x-200x66.png" alt="">
      <img class="mx-3" src="../assets/img/bb-logotan-2x-200x66.png" alt="">
      <img class="mx-3" src="../assets/img/kindlefire-logotan-2x-200x66.png" alt="">
    </div>
    <div class="new-audiobook d-flex justify-content-center align-items-center ">
      <img src="../assets/img/audible-app-2x-400x418.png" alt="">
      <div class="audiobook-right text-center ">
        <h3>New Audiobook</h3>
        <p class="text-shop">no time to read? no problem, listen to it</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br> Velit quam autem neque ab blanditiis id aliquam vel</p>
        <img src="../assets/img/audible-logo.png" alt="">
        <img src="../assets/img/bn-logo-tall.png" alt="">
        <img src="../assets/img/kindle-logo-tall.png" alt="">
      </div>
    </div>
    <div class="testimonial">
      <CardTestimonial/>
    </div>
  </main>
    
</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/_variables.scss';
@import '../assets/scss/partials/_tipography';

.container-custom{
  margin: 0 auto;
  width: 72%;
}
h2{
  line-height: 90px;
  color: $prymari-clr;
  font-family:"Birthstone Bounce", cursive ;
  font-size: $font-lm;
}
.btn{
  font-size: $font-ss;
}
.btn-success{
  background-color: $success-clr;
}

main{
  .references{
    background-color: $bleh-clr;
    img{
      width: 12%;
    }
  }
  .new-audiobook{
    padding-top: 70px;
    background-image: url(/src/assets/img/banner.jpg);
    h3{
      color: $light-clr;
      font-family: "Playfair Display", serif;
      font-weight: bold;
    }
    .text-shop{
        font-size:$font-s ;
        color: $prymari-clr;
        text-transform: uppercase;
        font-weight: bold;
    }
    p{
      color: $light-clr;
    }
    .audiobook-right{
      img{
        width: 25%;
        margin-right: 20px;
      }
    }
  }
  
}

</style>
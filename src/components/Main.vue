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
      <div class="container-custom">
        <div class="d-flex justify-content-between ">
          <div>
            <h3>What The Critics Say</h3>
            <p class="green">TESTIMONIALS FROM AROUND THE WORLD</p>
          </div>
          <div class="py-4" >
            <span class="btn btn-warning">Read all testimonials</span>
          </div>
        </div>
        <div class="row">
          <div class="col-7">
            <CardTestimonial/>
          </div>
          <div class="comics col-5">
            <div class="text-comics text-center">
              <h5>A True Masterpiece, Bravo!</h5>
              <p>Nulla quis lorem ut libero malesuada feugiat.
              Vivamus magna justo, lacinia eget consectetur
              sed, convallis at tellus. Vivamus suscipit tortor
              eget felis porttitor volutpat. Nulla quis lorem ut
              libero malesuada feug at.</p>
            </div>
            <img src="../assets\img\theguardian-xsmall.png" alt="">
            <span>Gerald Hendley, The Guardian</span>
            <div class="separetor text-comics text-center">
              <h5>A Unique View On The World</h5>
              <p>Donec sollicitudin molestie malesuada.
              Curabitur arcu erat, accumsan id imperdiet et,
              porttitor at sem. Vestibulum ac diam sit amet
              quam vehicula elementum sed sit amet dui.
              Nulla quis lorem ut libero malesuada feugiat.
              Vestibulum ac diam sit amet.</p>
            </div>
            <img src="../assets\img\globe-xsmall.png" alt="">
            <span>Mary Maxey, The Globe And Mail</span>
          </div>
        </div>
      </div>
      
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

h3{
  color: $light-clr;
  font-family: "Playfair Display", serif;
  font-weight: bold;
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
  .testimonial{
    padding-top: 60px;
    p{
      font-size: $font-s;
    }
    h3{
      color: black;
    }
    h5{
      font-weight: bold;
      font-size: $font-n;
    }
    .green{
      color: $secondari-clr;
    }
    .btn-warning{
      padding: 5px 25px;
      color: white;
      font-weight: bold;
    }
    .comics{
      img{
        width: 20px;
        margin-right: 15px;
      }
      .separetor{
        margin-top: 20px;
      }
      .text-comics{
        padding: 50px;
        background-color: $bleh-clr;
      }
    }
  }
}

</style>
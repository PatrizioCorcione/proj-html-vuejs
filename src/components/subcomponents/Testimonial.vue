<script>
import {store} from '../../store';
import CardTestimonial from './CardTestimonial.vue'
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
  <div class="testimonial py-5">
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
            <img src="../../assets\img\theguardian-xsmall.png" alt="">
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
            <img src="../../assets\img\globe-xsmall.png" alt="">
            <span>Mary Maxey, The Globe And Mail</span>
          </div>
        </div>
      </div>
      
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables.scss';
@import '../../assets/scss/partials/_tipography';
.testimonial{
  .col-7{
    padding-right: 40px;
  }
  
  .container-custom{
    margin: 0 auto;
    width: 72%;
    }
    p,span{
      font-size: $font-s;
      color: $tundra-clr;
    }
    h3,h5{
      color: black;
      font-family: "Playfair Display", serif;
    }
    h5{
      font-weight: bold;
      font-size: $font-n;
    }
    .green{
      color: $secondari-clr;
    }
    .btn-warning{
      padding: 7px 35px;
      color: white;
      font-weight: bold;
      font-size:  $font-ss;
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
</style>
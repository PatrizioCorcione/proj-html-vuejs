<script>
import {store} from '../../store';
export default {
  data(){
    return{
      store
    }
  }
}


</script>

<template>
        <div class="card text-bg-dark">
          <img src="../../assets/img/testimonial2-2x.jpg" class="card-img" alt="...">
          <div class="card-img-overlay">
            <h3 class="card-title py-3 ">Best Author Of His Generation</h3>
            <p class="py-3">This book will change your perspective on life</p>
            <p class="card-text">Donec fringilla nunc eu turpis dignissim, at euismod sapien
            tincidunt. Maecenas eleifend congue cursus. In vitae enim quis sem
            pharetra.Curabitur arcu erat, accumsan id imperdiet et, porttitor at
            sem.</p>
            <p class="card-text">Donec fringilla nunc eu turpis dignissim, at euismod sapien
            tincidunt. Maecenas eleifend congue cursus. In vitae enim quis sem
            pharetra.Curabitur arcu erat, accumsan id imperdiet et, porttitor at
            sem.</p>
            <img src="../../assets\img\nytimes-logo-white-xsmall.png" alt="">
            <span>Justine Kilpatrick,</span><span class="green"> The New York Times</span>
          </div>
        </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables';
@import '../../assets/scss/partials/_tipography';
.card{
  border-radius: 0px 0px 60px 0px;
  border: 0;
  overflow: hidden;
  .card-img-overlay{
    img{
      width: 15px;
      margin-right: 20px;
    }
    padding: 75px 70px;
    .green{
      color: $secondari-clr;
    }
    .card-title{
      font-weight: bold;
      font-family: "Playfair Display", serif;
      border-bottom: 1px solid darkgray;
    }
  }
}
</style>

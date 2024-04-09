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
  <div class="container-custom">
    <div class="row">
      <div class="col-7">
        <h3>sadasdsdfasfasfasfafasfa</h3>
        <p>sadgadgasdgasdadsadsgafdgafgafdghadfg</p>
        <div class="card text-bg-dark">
          <img src="../../assets/img/testimonial2-2x.jpg" class="card-img" alt="...">
          <div class="card-img-overlay">
            <h3 class="card-title">Card title</h3>
            <p>sgfaaaaaaaaaaaaaaaaaaaa</p>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <img src="../../assets\img\nytimes-logo-white-xsmall.png" alt="">
            <span>hjgvfugkihkjhnkjhkjhkjh</span>
          </div>
        </div>

      </div>
      <div class="col-5">

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables';
@import '../../assets/scss/partials/_tipography';
.card{
  border-radius: 0px 0px 60px 0px;
  overflow: hidden;
  .card-img-overlay{
    padding: 100px 70px;
    .card-title{
      font-weight: bold;
      font-family: "Playfair Display", serif;
      border-bottom: 1px solid darkgray;
    }
  }
}


</style>

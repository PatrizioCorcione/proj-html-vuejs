<script>
import {store} from '../store';
export default {
  data(){
    return{

    }
  }
}


</script>

<template>

  <footer>
    <div class="row row-cols-4 ">
      <div class="col">
        <img class="logo-foot" src="/src/assets/img/author-logo-round-small.png" alt="">
      </div>
      <div class="col">
        <h3>sdgsdfgdfgdf</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, id sapiente laudantium soluta consequatur repudiandae iste illo perferendis quam sunt tempore placeat? Natus iusto consequatur rem! Porro eligendi culpa placeat.</p>
      </div>
      <div class="col">
        <h3>gfjfgj</h3>
        <ul>
          <li><a href="">fgd</a></li>
          <li><a href="">dfg</a></li>
          <li><a href="">fdg</a></li>
          <li><a href="">fdsg</a></li>
        </ul>
      </div>
      <div class="col">
        <h3>gfjfgj</h3>
        <ul>
          <li><a href="">fgd</a></li>
          <li><a href="">dfg</a></li>
          <li><a href="">fdg</a></li>
          <li><a href="">fontaweson</a></li>
        </ul>
      </div>
    </div>
  </footer>
  
</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/_variables';
footer{
  padding: 50px;
  font-size: 0.8rem;
  color: $light-clr;
  background-image: url(/src/assets/img/footer-3.jpg);
  background-size: cover;
  .logo-foot{
    width: 45%;
  }
  li::marker {
    font-size: 0.5rem;
  font-family: "Font Awesome 5 Free";
  font-weight: 800;
  content: "\f054";
}
}

</style>
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
      <div class="col img-foot-size">
        <img class="logo-foot" src="/src/assets/img/author-logo-round-small.png" alt="">
      </div>
      <div class="col ">
        <h3>Abaut me</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, id sapiente laudantium soluta consequatur repudiandae iste illo perferendis sunt ?</p>
      </div>
      <div class="col">
        <h3>Useful link</h3>
        <ul class="p-0 list-unstyled ">
          <li><i class="fa-solid fa-chevron-right"></i><a href="">Latest books</a></li>
          <li><i class="fa-solid fa-chevron-right"></i><a href="">Upcoming events</a></li>
          <li><i class="fa-solid fa-chevron-right"></i><a href="">Recent articles</a></li>
          <li><i class="fa-solid fa-chevron-right"></i><a href="">Business</a></li>
          <li><i class="fa-solid fa-chevron-right"></i><a href="">Visit my foundation</a></li>
        </ul>
      </div>
      <div class="col ">
        <h3>Contact info</h3>
        <ul class="list-unstyled ">
          <li>63 E. Studebaker Street Bolingbrook, 60440</li>
          <li>Phone: (800) 000-0000</li>
          <li>Mobile: (800) 000-0000</li>
          <li>Email: info@you-company.com</li>
          <li>
            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-linkedin"></i></a>
            <a href=""><i class="fa-brands fa-youtube"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  
</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/_variables';
@import '../assets/scss/partials/_tipography';
@import url('https://fonts.googleapis.com/css2?family=Birthstone+Bounce:wght@400;500&display=swap');
footer{
  padding: 75px 63px 75px 95px;
  font-size: 0.8rem;
  color: $light-clr;
  background-image: url(/src/assets/img/footer-3.jpg);
  background-size: cover;
  h3{
    text-transform: uppercase;
    font-family: "Playfair Display", serif;
    font-size: $font-n;
    padding-bottom: 1px;
    margin-bottom: 15px;
  }
  ul{
    line-height: 30px;
  }
  .img-foot-size{
    width: 15%;
  }
  .logo-foot{
    width: 100px;
  }
  .fa-chevron-right {
    font-size: 0.5rem;
    list-style: none;
    margin-right: 15px;
  }
  a{
    text-decoration: none;
    color: $light-clr;
    margin-right: 10px;
    &:hover{
      color: $prymari-clr;
    }
  }
}

</style>
<script>
import {store} from '../store';
export default {
  data(){
    return{
      store,
      
    }
  }
}


</script>

<template>
  <header>

    <div class="container ">
      <div class="row row-cols-2 ">
        <div class="col">
          <img src="/src/assets/img/author-logo-round-200x205.png" alt="">
        </div>
        <div class="col">
          <nav class="navbar navbar-expand">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link text-white active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white " href="#">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white " href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white " href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white " href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white " href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white " href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white " href="#">fontaweson</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="hero container-custom">
      <h1>ciccio pasticcio</h1>
      <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat iste repudiandae eveniet</h2>
    </div>
  </header>
  
</template>

<style lang="scss" scoped>
header{
  background-image: url(/src/assets/img/footer-3.jpg);
  background-size: cover;
  height: 500px;
  .container{
    img{
      width: 30%;
    }
    .collapse{
      flex-direction: row-reverse;
    }
  }
  .hero{
    color: white;
    margin: 0 auto;
    width: 72%;
    h2{
      width: 50%;
    }
  }
}

</style>
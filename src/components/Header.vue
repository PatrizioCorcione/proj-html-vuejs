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

    <div class="container-lg ">
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
  </header>
  
</template>



<style lang="scss" scoped>
header{
  background-image: url(/src/assets/img/footer-3.jpg);
  background-size: cover;
  .container-lg{
    height: 500px;
    .collapse{
      flex-direction: row-reverse;
    }
  }
}

</style>
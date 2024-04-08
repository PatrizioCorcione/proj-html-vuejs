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
      
        <div class="">
          <h1>ciccio pasticcio</h1>
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat iste repudiandae eveniet</h2>
          <p>- lorem ipsum</p>
          <span class="btn btn-dark ">
            &lArr;
          </span>
          <span class="btn btn-dark ">
            &rAarr;
          </span>

        </div>
        <div class="imgbookphon">
          <div class="d-flex">
            <div>
              <img src="/src/assets/img/book-widget.png" alt="">
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo aspernatur soluta quos voluptatibus minus nulla inventore repudiand</p>
            </div>
          </div>

          <div class="flex-row ">
            <span type="button" class="btn btn-outline-light">Light</span>
            <span type="button" class="btn btn-outline-light">Light</span>

          </div>
        </div>
      
    </div>
  </header>
  
</template>

<style lang="scss" scoped>
header{
  position: relative;
  background-image: url(/src/assets/img/footer-3.jpg);
  background-size: cover;
  height: 565px;
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
    h1{
      color: rgb(255, 234, 0);
    }
    h2{
      width: 50%;
    }
    p{
      color: gray;
    }
    span{
      background-color: rgba(0, 0, 0, 0.32);
      margin-right: 2px;
    }
    .imgbookphon{
      img{
        width: 180px;
      }
      right: 0;
      position: absolute;
      background-color: white;
      width: 37%;
      bottom: 0%;
      padding: 30px 30px 20px 30px;
    }
  }
}

</style>
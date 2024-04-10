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
      <div class="d-flex justify-content-between ">
        <div class=" logo">
          <img src="/src/assets/img/author-logo-round-200x205.png" alt="">
        </div>
        <div>
          <nav class="navbar navbar-expand">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li 
                  v-for="navItem in store.navbar"
                  :key="navItem.id"
                  class="nav-item">
                    <a class="nav-link text-white active" aria-current="page" :href=navItem.linck >
                      {{navItem.text}}
                      <i :class='navItem.icon'></i>
                    </a>
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
          <h1>Damon Vaughn</h1>
          <h2>Beast-selling autors and the most influential public intellectual in the wester world right now.</h2>
          <p>- The New York Times</p>
          <span class="btn btn-dark ">
            <i class="fa-solid fa-arrow-left"></i>
          </span>
          <span class="btn btn-dark ">
            <i class="fa-solid fa-arrow-right"></i>
          </span>

        </div>
        <div class="imgbookphon">
          <div class="d-flex">
            <div>
              <img src="/src/assets/img/book-widget.png" alt="">
            </div>
            <div>
              <h3>Latest book relase</h3>
              <p class="text-shop">D. Vaughn autobiography</p>
              <p class="desc-Shop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo aspernatur soluta quos voluptatibus </p>
            </div>
          </div>

          <div class="shopBtn">
            <span type="button" class="btn btn-outline-light btn-amazon"><i class="fa-brands fa-amazon"></i> By on Amazon</span>
            <span type="button" class="btn btn-outline-light btn-apple"><i class="fa-brands fa-apple"></i> By on Appstore</span>
          </div>
        </div>
    </div>
    

  </header>
  
</template>

<style lang="scss" scoped>
@import '../assets/scss/partials/_variables';
@import '../assets/scss/partials/_tipography';

header{
  position: relative;
  background-image: url(/src/assets/img/footer-3.jpg);
  background-size: cover;
  height: 570px;
  .container{
    img{
      width: 70%;
    }
    .navbar{
      padding: 0;
      
    }
    .collapse{
      flex-direction: row-reverse;
      
      li{
        font-size: $font-s;
        margin-right: 10px;
        padding-top: 15px;
        &:hover{
          
          border-top: 3px solid $prymari-clr;
          a{
            cursor: pointer;
            color: $prymari-clr !important;
          }
        }
        
      }
      .fa-cart-shopping{
        font-size: $font-s;
        line-height: 18px;
      }
    }
  }
  .container-custom{
    color: $light-clr;
    margin: 0 auto;
    width: 72%;
    h1{
      line-height: 90px;
      color: $prymari-clr;
      font-family:"Birthstone Bounce", cursive ;
    }
    h2{
      line-height: 50px;
      width: 54%;
      font-family: "Playfair Display", serif;
      font-weight: bold;
    }
    p{
      color: $tundra-clr;
    }
    span{
      background-color: $dark-clr;
      margin-right: 2px;
      padding: 10px;
      font-size: $font-s;
      &:hover{
        border: 1px solid darken($secondari-clr, 20%)!important;
      }
    }
    .imgbookphon{
      right: 0;
      position: absolute;
      background-color: $light-clr;
      width: 37%;
      bottom: 0%;
      padding: 30px 30px 20px 30px;
      img{
        width: 180px;
      }
      h3{
        font-size: $font-n;
        color: $dark-clr;
        font-family: "Playfair Display", serif;
        font-weight: bold;
      }
      .text-shop{
        font-size:$font-s ;
        color: $prymari-clr;
        text-transform: uppercase;
      }
      .desc-shop{
        font-size:$font-s ;
      }
      .shopBtn{
        text-align: center;
        span{
          margin: 0;
          background-color: $light-clr;
          color: $dark-clr;
          border: 1px solid $secondari-clr;
          width: 50%;
        }
        .btn-amazon{
          border-radius: 5px 0px 0px 5px;
          padding-left: 20px;
        }
        .btn-apple{
          border-radius: 0px 5px 5px 0px;
          padding-right: 20px;
        }
        .btn-apple,.btn-amazon{
          &:hover{
            background-color: lighten($secondari-clr,50%);
          }
        }
      }
    }
  }
  .badge{
    position: absolute;
    right: 0;
    top: 182px;
  }
}

</style>
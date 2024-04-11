<script>
import { store } from '../../store';

export default {
  data(){
    return{
      store
    }
  },
  components:{
    
  },
  props:{
    
  },
  methods: {
      resetEmail(){
        this.store.eMail='';
      }
    },
}
</script>

<template>
  <div class="email-form d-flex justify-content-center ">
    <div class="w-25 ">
      <h3>Subscribe To My Newsletter</h3>
      <p id="subtitle">BE NOTIFIED ABOUT BOOK SIGNING TOUR DATES</p>
      <div class="d-flex justify-content-center my-4">
        <input
        v-model="store.eMail"
        @keyup.enter="resetEmail()"
        type="email" class="" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="insert your email ...*">
        <span
        @click="resetEmail()"
        class="btn btn-success mx-2">Subscribe</span>
      </div>
      <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables.scss';
@import '../../assets/scss/partials/_tipography';

.email-form{
  text-align: center;
  padding: 70px 0px;
  background-image: url('../../assets/img/banner-2.jpg');
  span{
    font-size: $font-s;
    line-height: 30px;
    padding: 0px 30px;
    background-color: $secondari-clr;
    &:hover{
      background-color: darken($secondari-clr,10%);
    }
  }
  p{
    font-size: $font-s;
    color: $tundraLig-clr;
  }
  h3{
    color: white;
    font-family: "Playfair Display", serif;
    font-weight: bold;
  }
  #subtitle{
    font-weight: bold;
    color: $prymari-clr;
  }
}
</style>
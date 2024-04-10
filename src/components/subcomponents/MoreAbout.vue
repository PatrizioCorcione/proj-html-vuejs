<script>
import {store} from '../../store';
export default {
  data(){
    return{
      store,
    }
  },
 
}
</script>

<template>
  <div class="text-center ">
    <h2>More about Damon Vaughn</h2>
    <h5>Damon Vaughn is  professor of psychology a the university of Toronto, a clynical psychologist <br> and the author of the multi-million copy bestseller " The story of my life"</h5>
    <span class="btn btn-success my-5 border-0 ">Meet the author</span>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables.scss';
@import '../../assets/scss/partials/_tipography';
h2{
  line-height: 90px;
  color: $prymari-clr;
  font-family:"Birthstone Bounce", cursive ;
  font-size: $font-lm;
}
.btn{
  font-size: $font-ss;
}
</style>
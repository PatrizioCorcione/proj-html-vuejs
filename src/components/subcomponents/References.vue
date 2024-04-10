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
  <div class="references d-flex justify-content-center align-items-center  py-5">
    <img class="mx-3" src="../../assets/img/ebay-logotan-2x-200x66.png" alt="">
    <img class="mx-3" src="../../assets/img/audible-logotan-2x-200x66.png" alt="">
    <img class="mx-3" src="../../assets/img/bb-logotan-2x-200x66.png" alt="">
    <img class="mx-3" src="../../assets/img/kindlefire-logotan-2x-200x66.png" alt="">
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables.scss';
@import '../../assets/scss/partials/_tipography';
.references{
    background-color: $bleh-clr;
    img{
      width: 12%;
    }
  }
</style>
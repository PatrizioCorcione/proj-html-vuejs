<script>
import CardAuthor from './CardAuthor.vue'
import {store} from '../../store';
export default {
  data(){
    return{
      store,
    }
  },
  components:{
    CardAuthor,
  },
  props:{
    
  },
  methods: {
      
    },
}
</script>

<template>
  <div class="title-autor">
    <h3 class="text-black">Dig A Little Deeper Into Damon Vaughn</h3>
    <p>FIND OUT MORE ABOUT THE AUTHOR HIMSELF</p>
  </div>
  <div class="author-info d-flex justify-content-center align-items-center py-5 ">
    <CardAuthor
    v-for="card in store.authorarray"
    :key="card.id"
    :imgPa="card.img"
    :descPa="card.desc"
    :linckPa="card.linck"
    :titlePa="card.title"
    />

  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables.scss';
@import '../../assets/scss/partials/_tipography';
.author-info{
  width: 70%;
  margin: 0 auto;
}
.title-autor{
  h3{
    font-family: "Playfair Display", serif;
  }
  padding-top: 50px;
  text-align: center;
  p{
    text-transform: uppercase;
    color: $secondari-clr;
  }
}

</style>
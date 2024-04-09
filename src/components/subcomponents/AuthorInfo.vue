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

</style>
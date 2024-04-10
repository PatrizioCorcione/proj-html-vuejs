<script>
import {store} from '../../store';
import CardEvent from './CardEvent.vue'
export default {
  data(){
    return{
      store,
    }
  },
  components:{
    CardEvent,
  }
}
</script>

<template>
  <div class="event py-5">
      <div class="text-center">
        <h3>Upcoming Events</h3>
        <p>meet the author in person</p>
      </div>
      <div class=" container d-flex py-3">
        <CardEvent
        v-for="card in store.eventarray"
        :key="card.id"
        :imgP="card.img"
        :descP="card.desc"
        :linckP="card.linck"
        :titleP="card.title"
        />
      </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables.scss';
@import '../../assets/scss/partials/_tipography';
.event{
    h3{
      color: black;
      font-family: "Playfair Display", serif;
    }
    p{
      text-transform: uppercase;
      color: $prymari-clr;
      font-size: $font-s;
    }
    background-color: $bleh-clr;
  }
</style>
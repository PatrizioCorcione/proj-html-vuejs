<script>
import axios from 'axios';
import {store} from './store';
import Header from "../src/components/Header.vue";
import Main from "../src/components/Main.vue";
import Footer from "../src/components/Footer.vue";

export default{
  components:{
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      store,
    };
    
  },
  methods: {
    getApi(){
      axios.get(this.store.apiUrl,{
        params:{
          
        }
      })
      .then(result =>{
        
        
      })
    },
  }, 
  mounted() {
    this.getApi()
  }, 
}
</script>

<template>

  

  <Header/>
  <Main/>
  <Footer/>

  
  
</template>

<style lang="scss">

@import './assets/scss/main.scss';

</style>

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
@import url('https://fonts.googleapis.com/css2?family=Birthstone+Bounce:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Birthstone+Bounce:wght@400;500&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

</style>

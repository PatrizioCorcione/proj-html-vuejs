<script>
export default {
  data(){
    return{
      
    }
  },
  components:{
   
  },
  props:{
    
  },
  methods: {
      
    },
}
</script>

<template>
  <div class="recent-articles py-5 ">
    <div class="container-custom">
      <div class="d-flex justify-content-between ">
        <div>
            <h3>Recent Articles</h3>
            <p>read the latest entries</p>
          </div>
          <div class="py-4" >
            <span class="btn btn-warning">All Articles</span>
          </div>
        </div>
      <div class="row">
        <div class="col-8">
          <div class="me-4 h-100  fix-bg">
            <div>
              <img src="../../assets/img/20-Tips-800x471.jpg" alt="">
              <div>
                <h6>20 Creativity Tips</h6>
                <p>By admin | October 24th, 2019 | Categories: Event,Tips & tRICKS</p>
                <p>Vestibulum ante ipsum primis in facibus orci luctus et ultrices posuer cubilia Curae;Donec velit neque, auctor sit amet aliquam vel, ulluamcorper sit amet.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div>
            <img src="../../assets/img/thumb-13-2x-700x441.jpg" alt="">
            <div>
              <h6>What's On Your Booklist?</h6>
              <p>October 24th, 2019 | 0 Comments</p>
            </div>
          </div>
          <div>
            <img src="../../assets/img/thumb-08-2x-700x441.jpg" alt="">
            <div>
              <h6>Istanbul Travel Guide</h6>
              <p>October 24th, 2019 | 0 Comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/partials/_variables.scss';
@import '../../assets/scss/partials/_tipography';
img{
  width: 100%;
}
.recent-articles{
  background-color: $bleh-clr;
  p{
    text-transform: uppercase;
    color: $secondari-clr;
  }
  h3{
    font-family: "Playfair Display", serif;
    font-weight: bold;
  }
  h6{
    font-size: 1.1rem;
    margin-top: 20px;
  }
  span{
    color: white;
    font-size: $font-s;
    padding: 5px 50px;
  }
  .container-custom{
    width: 70%;
    margin: 0 auto;
    .fix-bg{
      background-color: white;
      padding: 30px;
      margin: 0px 0px;
    }
    .row{
      p{
        font-size: $font-s;
        color: $tundra-clr;
        text-transform: capitalize;
      }
      
      .col-4{
        padding: 40px;
        background-color: white;
        padding: 30px;
        margin: 0px 0px;
      }
    }
  }
}
</style>
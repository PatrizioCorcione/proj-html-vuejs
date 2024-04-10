<script>
import {store} from '../store';
import AuthorInfo from './subcomponents/AuthorInfo.vue'
import EmailForm from './subcomponents/EmailForm.vue'
import RecentArticles from './subcomponents/RecentArticles.vue'
import MoreAbout from './subcomponents/MoreAbout.vue'
import References from './subcomponents/References.vue'
import NewAudiobook from './subcomponents/NewAudiobook.vue'
import Testimonial from './subcomponents/Testimonial.vue'
import UpcomingEvents from './subcomponents/UpcomingEvents.vue'
export default {
  data(){
    return{
      store,
    }
  },
  components:{
    AuthorInfo,
    EmailForm,
    RecentArticles,
    MoreAbout,
    References,
    NewAudiobook,
    Testimonial,
    UpcomingEvents,
  }
}
</script>

<template>

  <main class="pt-5">
    <MoreAbout/>
    <References/>
    <NewAudiobook/>
    <Testimonial/>
    <UpcomingEvents/>
    <EmailForm/>
    <AuthorInfo/>
    <RecentArticles/>
  </main>
    
</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/_variables.scss';
@import '../assets/scss/partials/_tipography';

</style>
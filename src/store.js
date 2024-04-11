import { reactive } from "vue";
export const store = reactive({
  eventarray:[
    {
      id:1,
      img:'event-05-800x479.jpg',
      title:'Chicago Book Signig',
      desc:'Mauris blandit aliquet elit, eget tincidunt nibhpul vinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a nulla.',
      link:'#'
    },
    {
      id:2,
      img:'event-04-800x479.jpg',
      title:'Meet & Greet With Amanda',
      desc:'Mauris blandit aliquet elit, eget tincidunt nibhpul vinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a nulla.',
      link:'#'
    },
    {
      id:3,
      img:'event-07-800x479.jpg',
      title:'Open Book: Dialogues',
      desc:'Mauris blandit aliquet elit, eget tincidunt nibhpul vinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a nulla.',
      link:'#'
    }
  ],
  authorarray:[
    {
      id:1,
      img:'box-1.jpg',
      title:'About Me',
      desc:'Vestibulum ante ipsum primis',
      link:'#'
    },
    {
      id:2,
      img:'box-4.jpg',
      title:'My Latest Book',
      desc:'Vestibulum ante ipsum primis',
      link:'#'
    },
    {
      id:3,
      img:'box-3.jpg',
      title:'Book Signing',
      desc:'Vestibulum ante ipsum primis',
      link:'#'
    }
  ],
  navbar:[
    {
      id:1,
      text:'Home',
      link:'#',
      icon:''
    },
    {
      id:2,
      text:'Abaout me',
      link:'#',
      icon:''
    },
    {
      id:3,
      text:'Testimonials',
      link:'#',
      icon:''
    },
    {
      id:4,
      text:'My blog',
      link:'#',
      icon:''
    },
    {
      id:5,
      text:'Meetups',
      link:'#',
      icon:''
    },
    {
      id:6,
      text:'Shop',
      link:'#',
      icon:''
    },
    {
      id:7,
      text:'Contact me',
      link:'#',
      icon:''
    },
    {
      id:8,
      text:'',
      link:'#',
      icon:'fa-solid fa-cart-shopping'
    },
  ],
  usefullLink:[
    {
      id:1,
      text:'Latast books',
      link:'#',
    },
    {
      id:2,
      text:'Upcoming events',
      link:'#',
    },
    {
      id:3,
      text:'Recent articles',
      link:'#',
    },
    {
      id:4,
      text:'Business',
      link:'#',
    },
    {
      id:5,
      text:'Visit my foundation',
      link:'#',
    },
  ],
  footerIcon:[
    {
      id:1,
      icon:'fa-facebook-f',
      link:'#',
    },
    {
      id:2,
      icon:'fa-twitter',
      link:'#',
    },
    {
      id:3,
      icon:'fa-instagram',
      link:'#',
    },
    {
      id:4,
      icon:'fa-linkedin',
      link:'#',
    },
    {
      id:5,
      icon:'fa-youtube',
      link:'#',
    },
  ],
  eMail:''
});
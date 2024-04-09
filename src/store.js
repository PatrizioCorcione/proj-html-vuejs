import { reactive } from "vue";
export const store = reactive({
  eventarray:[
    {
      id:1,
      img:'event-05-800x479.jpg',
      title:'Chicago Book Signig',
      desc:'Mauris blandit aliquet elit, eget tincidunt nibhpul vinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a nulla.',
      linck:'#'
    },
    {
      id:2,
      img:'event-04-800x479.jpg',
      title:'Meet & Greet With Amanda',
      desc:'Mauris blandit aliquet elit, eget tincidunt nibhpul vinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a nulla.',
      linck:'#'
    },
    {
      id:3,
      img:'event-07-800x479.jpg',
      title:'Open Book: Dialogues',
      desc:'Mauris blandit aliquet elit, eget tincidunt nibhpul vinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a nulla.',
      linck:'#'
    }
  ],
  authorarray:[
    {
      id:1,
      img:'box-1.jpg',
      title:'About Me',
      desc:'Vestibulum ante ipsum primis',
      linck:'#'
    },
    {
      id:2,
      img:'box-4.jpg',
      title:'My Latest Book',
      desc:'Vestibulum ante ipsum primis',
      linck:'#'
    },
    {
      id:3,
      img:'box-3.jpg',
      title:'Book Signing',
      desc:'Vestibulum ante ipsum primis',
      linck:'#'
    }
  ]
});
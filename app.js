import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue'; 
import About from './components/About.vue';
import Contact from './components/Contact.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
];

const router = new VueRouter({
  routes,
  mode: 'history', 
});

new Vue(
{
  el: '#app',
  router, 
  data: {
    name: 'Adrian Faria',
    profession: "I'm a University Student.",
    email: '',
    aboutText: "I am a Computer Science student at Deakin University(Burwood). I study mainly Computer Science units and with the occasional Commerce units. My major is data science and I hope to keep this till the end of my course. I have experience in the field as I have participated in internship programs with consulting and web design."
  },
  methods: {
    handleSubmit() {
      console.log('Email submitted:', this.email);
    },
    contactMe() {
      console.log('Contact button clicked');
    }
  }
});

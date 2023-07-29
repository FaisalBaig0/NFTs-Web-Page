<template>
  <router-view/>
 <HeaderWeb/>
 <HomePage/>
 <FooterWeb/>
</template>

<script>
import HeaderWeb from './components/HeaderWeb.vue';
import FooterWeb from './components/FooterWeb.vue';
import HomePage from './components/HomePage.vue';



export default {
  name: 'App',
  components:{
    HeaderWeb,
    HomePage,
    FooterWeb

   
  }
 
}
</script>

<style>
#app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

@media (max-width: 767px) {
  .home {
    padding: 20px; /* Adjust padding for better spacing on smaller screens */
  }

  .container,
  .container1 {
    flex-direction: column; /* Stack the boxes vertically on smaller screens */
    align-items: center; /* Center the boxes horizontally */
  }

  .box {
    width: 100%; /* Make the boxes take full width on smaller screens */
    margin: 10px 0; /* Add some spacing between the boxes */
    text-align: center; /* Center the text within the boxes */
  }

  .home .img img,
  .home .ape img {
    max-height: 300px; /* Limit the maximum height of images for better display */
  }

  .frame-btn button {
    margin: 10px; /* Reduce the button margin for better spacing */
    padding: 10px; /* Reduce the button padding for better display on smaller screens */
  }
}
</style>

<template>
  <div>
    <Navbar></Navbar>
    <Formulario class="mt-4"></Formulario>
  </div>
  
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Formulario from '../components/Formulario.vue'


export default {
  name: 'HomeView',
  components: {Navbar, Formulario}


}

</script>

<template>
  <div>
    <cab />
    <campos />
    <educacion />
    <experiencia />
    <referencia />
    <conocimiento />



    <Footer />
  </div>
</template>

<script>
//import Logo from "~/components/Logo.vue";
import Campos from "~/components/Campos.vue";
import Cab from "~/components/Cab.vue";
import Educacion from "~/components/Educacion.vue";
import Footer from "~/components/Footer.vue";
import Experiencia from "~/components/Experiencia.vue";
import Referencia from "~/components/Referencia.vue";
import Conocimiento from "~/components/Conocimiento.vue";



export default {
  components: {
    Campos,
    Educacion,
    Cab,
    Footer,Experiencia, Referencia, Conocimiento
  }
};
</script>



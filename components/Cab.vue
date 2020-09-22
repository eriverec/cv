<template name="component-name">
  <section class="hero is-success is-fullheight">
    <!-- Hero head: will stick at the top -->

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">C U R R I C U L U M <br/><br/> V I T A E</h1>
         <span ><font-awesome-icon icon="chevron-down" /></span>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li class="is-active">
              <a href="#" v-scroll-to="'#campos'">Campos</a>
            </li>
            <li>
              <a href="#" v-scroll-to="'#educacion'">Educacion</a>
            </li>
            <li>
              <a href="#" v-scroll-to="'#experiencia'">Experiencias</a>
            </li>
            <li>
              <a href="#" v-scroll-to="'#referencia'">Referencias</a>
            </li>
            <li>
              <a href="#" v-scroll-to="'#conocimiento'">Conocimientos</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>





<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-image"></div>
        <div class="card-content">
          <figure class="image is-128x128 center-foto">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
          </figure>

          <div class="content">
            <br/>
            <h2>Eri Cristofer Vera Iturralde</h2>
            <br />

            <div class="field is-grouped is-grouped-multiline">
              <div class="control">


                <div class="box  ">
                  <span ><font-awesome-icon icon="phone-alt" /> Telefono</span><br/>
                  <span class="tag is-success is-medium">+593  9 7 8 7 7 5 2 0 1</span>
                </div>
                <div class="box">
                  <span ><font-awesome-icon icon="envelope-open" /> Email</span><br/>
                  <span class="tag is-success is-medium">eriveraec@gmail.com</span>
                </div>
                <div class="box">
                  <span ><font-awesome-icon icon="map-marker-alt" /> Direccion</span><br/>
                  <span class="tag is-success is-medium">Cdla Los Esteros Mz. 16A1 S. 57</span>
                </div>
                <div class="box">
                  <span ><font-awesome-icon icon="id-card" /> Cedula</span><br/>
                  <span class="tag is-success is-medium">0 9 5 0 7 9 0 0 7 1</span>
                </div>

                <div class="box">
                  <span ><font-awesome-icon icon="smile-beam" /> Estado Civil</span><br/>
                  <span class="tag is-success is-medium">Soltero</span>
                </div>

                <div class="box">
                  <span ><font-awesome-icon icon="birthday-cake" /> Fecha de Nacimiento</span><br/>
                  <span class="tag is-success is-medium">14 de Marzo de 1994</span>
                </div>

                <div class="box">
                  <span ><font-awesome-icon icon="car-side" /> Licencia de Conducir</span><br/>
                  <span class="tag is-success is-medium">Tipo B</span>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>
</template>

<style>
.center-foto {
  display: inline-block;
}
.control{
  margin: auto;
}
.tags{
  justify-content: center;
}
.control .box{
  width: unset !important;
  text-align: center;
}
</style>
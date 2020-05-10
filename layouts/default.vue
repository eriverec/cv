<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
/*@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');*/

body,
button,
input,
select,
textarea {
  font-family: "Montserrat", sans-serif;
}
body {
  overflow-x: hidden;
}
.title {
  font-size: 20px;
}
.title.is-3 {
  text-transform: uppercase;
  padding-top: 30px;
}
.box {
  width: 78%;
  margin: auto;
  margin-bottom: 30px;
  margin-top: 30px;
  box-shadow: 0 0.5em 1em 0.875em rgba(10, 10, 10, 0.1),
    0 0px 0 1px rgba(10, 10, 10, 0.02);
}
.is-3 {
  text-align: center;
  margin: 30px;
}
.table {
  margin: auto;
}
</style>

<script>
export default {
  data() {
    return {
      title: "HOJA DE VIDA"
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ],
      // link tags
      link: [
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap"
        },
        {
          //rel: "stylesheet",
         //href:
            //"https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css"
        }

      ],
      script: [
        {
          //type: "text/javascript",
          //src: "https://unpkg.com/bulma-modal-fx/dist/js/modal-fx.min.js",
        }, // Insert in body
        // with shorthand
        //{ t: "application/ld+json", i: '{ "@context": "http://schema.org" }' }
        // ...
      ],
      style: [
        {/*
          type: "text/css",
          inner: "body { background-color: #000; color: #fff}",
          undo: false*/
        }
        // ...
      ]
    };
  }
};
</script>

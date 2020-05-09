<template>
  <div>
    <nuxt />
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
body, button, input, select, textarea{
  font-family: 'Montserrat', sans-serif;
}
.title{
  font-size: 20px;  
}
.title.is-3{
  text-transform: uppercase;
  padding-top: 30px;
}
.box{
 width: 78%;
  margin: auto;
  margin-bottom: 30px;
  margin-top: 30px;
box-shadow: 0 0.5em 1em 0.875em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
}
.is-3 {
  text-align: center;
  margin: 30px;
}
.table{
  margin: auto;

}
</style>

<script>
export default {
  data () {
    return {
      title: 'HOJA DE VIDA'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>

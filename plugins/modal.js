import Vue from 'vue'

Vue.component('my-modal',{

  template:`
  <div class="modal is-active" >
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="box">

    <h1>Modal</h1>
    </div>
  </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>
  
  `

})
new Vue({
  el:'#si',
  data:{
    showmodal:false
  }
})


<template>
  <modal-popup class="modal-notice common-popup" ref="popup" @close="$emit('close')">
    <div class="container">
      <h2 class="title" v-show="setting.title">
        <i class="split-before"> </i>
        <span class="title-main">{{setting.title}}</span>
        <i class="split-after"></i>
      </h2>
      <p class="content">
        <slot name="content"></slot>
      </p><a class="button" v-if="setting.buttonText" v-bind:href="setting.buttonHref || 'javascript:void(0);'" v-on:click="onClick">{{setting.buttonText}}</a>
    </div>
  </modal-popup>
</template>

<script>
import modalPopup from './popup.vue';

export default {
  name: 'modal-notice',
  props: {
      autoClose:{
          type:[Boolean],
          default:true
      },
      title: {
          type: [String, Boolean],
          required: true
      },
      buttonBehavior: {
          type: Function
      },
      buttonHref: {
          type: String
      },
      button: {
          type: String,
          default: '知道了'
      }
  },
  data(){
      var vm = this;
      console.log(vm.title);
      return {
          show : false,
          setting: {
              title: vm.title,
              buttonBehavior: vm.buttonBehavior,
              buttonHref: vm.buttonHref,
              buttonText: vm.button
          }
      };
  },
  components: {
      modalPopup
  },
  watch:{
      button(val){
        this.setting.buttonText = val;
      },
      buttonBehavior(val){
          this.setting.buttonBehavior = val;
      }
  },
  methods: {
      open(){
          this.$refs.popup.open();
      },
      close(){
          this.$refs.popup.close();
          //this.$emit('close');
      },
      onClick(){
          if(typeof this.setting.buttonBehavior === 'function'){
              this.setting.buttonBehavior();
              this.autoClose && this.close();
          }else{
              this.close();
          }
      }
  }
}
</script>

<template>
  <modal-popup class="modal-alert common-popup" ref="popup" @close="$emit('close')">
    <div class="container">
      <h2 class="title" v-if="titleText">
        <span class="text">
          <slot name="title">{{titleText}}</slot>
        </span>
      </h2>
      <div class="content">
        <div class="text">
          <slot name="content"></slot>
        </div>
      </div>
      <a class="button" v-on:click="onButtonClick" v-bind:href="buttonHref">
        <slot name="button"></slot>
      </a>
    </div>
  </modal-popup>
</template>

<script>
import modalPopup from './popup.vue';

export default {
  name: 'modal-alert',
  props: {
      type: {
          type: String,
          default: 'info'
      },
      buttonBehavior: {
          type: [Function, String],
          default: 'close'
      },
      buttonHref: {
          type: String
      },
      title: {
          type: [String, Boolean],
          default: true
      }
  },
  data(){
      return {
          show : false,
          titleText: this.title === true ? '温馨提示' : this.title
      };
  },
  components: {
      modalPopup
  },
  methods: {
      onButtonClick(){
          if(this.buttonBehavior === 'close'){
              this.$refs.popup.close();
          }else{
              this.buttonBehavior();
          }
      },
      open(){
          this.$refs.popup.open();
      },
      close(){
          this.$refs.popup.close();
          this.$emit('close');
      }
  }
}
</script>

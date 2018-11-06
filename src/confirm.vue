<template>
  <modal-popup class="modal-confirm common-popup" ref="popup" v-show="show">
    <div class="container">
      <h2 class="title" v-if="title">{{title}}</h2>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="buttons">
        <div class="button cancel" v-if="cancel" v-on:click="$emit('cancel')">{{cancel | buttonTextFilter('cancel')}}</div>
        <div class="button confirm" v-if="confirm" v-on:click="$emit('confirm');close();">{{confirm | buttonTextFilter('confirm')}}</div>
      </div>
    </div>
  </modal-popup>
</template>

<script>
import modalPopup from './popup.vue';

export default {
  name: 'confirm',
  props: {
      confirm: {
          type: [Boolean, String],
          default: true
      },
      cancel: {
          type: [Boolean, String],
          default: true
      },
      title: {
          type: [Boolean, String],
          default: false
      }
  },
  data(){
      return {
          show : false
      }
  },
  components: {
      modalPopup
  },
  filters: {
      buttonTextFilter(val, key){
          let confirm = {
              confirmText: '确定',
              cancelText: '取消'
          };
          return  typeof val === 'string' ?
                  val
                  : confirm[key + 'Text'];
      }
  },
  methods:{
      open(){
          this.show = true;
          this.$refs.popup.open();
      },
      close(){
          this.show = false;
          this.$refs.popup.close();
      }
  }
}
</script>
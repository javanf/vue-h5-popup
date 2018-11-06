<template>
  <aside class="modal-popup" v-show="visible" style="{'background-color': mask};" v-on:click.self="onClickEmpty">
    <slot></slot>
  </aside>
</template>

<script>

export default {
  name: 'modal-popup',
  props: {
      mask: {
          type: String,
          default: 'rgba(0,0,0,0.6)'
      },
      closeWhenClickEmpty: {
          type: Boolean,
          default: true
      }
  },
  data: function(){
      return {
          visible: false
      };
  },
  methods: {
      onClickEmpty: function(){
          if(this.closeWhenClickEmpty){
              this.close();
          }
      },
      close: function(){
          if(this.visible) {
            this.visible = false;
            this.$emit('close');
          }else{
            this.visible = false;
          }
      },
      open: function(){
          this.visible = true;
          this.$emit('open');
      }
  },
  mounted: function(){
      this.$el.style.backgroundColor=this.mask;
  }
}
</script>

<style lang="scss" src="./popup.scss"></style>
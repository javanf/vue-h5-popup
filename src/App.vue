<template>
  <div>
    <div class="list">
      <div class="title">功能列表</div>
      <div @click="$refs.alert.open()">alert</div>
      <div @click="$refs.tips.open()">tips</div>
      <div @click="$refs.confirm.open()">confirm</div>
    </div>
    <modal-alert ref="alert">
      <div class="trave-tip-content txt-l" slot="content">
        <div class="confirm-text">
          <p>这里是alert提示框，我和notice有些相同，但是又有所不同，注意区分哦</p>
        </div>
      </div>
      <span slot="button">知道了</span>
    </modal-alert>
    <modal-notice :button="tipsBtnText" :buttonBehavior="tipsRedirect" :title="false" ref="tips">
        <div slot="content" class="tips-content">
          web秀测试试试看咯
        </div>
    </modal-notice>
    <modal-confirm title="确定支付" confirm="继续支付" cancel="取消" ref="confirm" @confirm="submitPay" @cancel="$refs.confirm.close()">
        <div class="alert-content" slot="content">
            <h3></h3>
            <p class="txt-l fs28 confirm-text">你确定用支付宝支付10,000元吗？
            </p>
        </div>
    </modal-confirm>
  </div>
</template>

<script>
import modalAlert from './alert.vue';
import modalNotice from './notice.vue';
import modalConfirm from './confirm.vue';

export default {
  name: 'app',
  data () {
    return {
      tipsBtnText: '知道了'
    }
  },
  components: {
    modalAlert,
    modalNotice,
    modalConfirm
  },
  methods: {
    tipsRedirect(){},
    submitPay(){}
  }
}
</script>

<style lang="scss">
.list{
  padding: .4rem;
  &>div{
    line-height: 2.8rem;
    text-align: center;
    background: #0CC071;
    margin-bottom: .2rem;
    border-radius: .2rem;
    color: #fff;
  }
  .title{
    background: #D2DDE7;
    color: #3b4f62;
  }
}
</style>
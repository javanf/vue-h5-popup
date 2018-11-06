# vue-h5-popup

> vue组件，移动端弹出层，包括confrim询问框，tips提示框，popup选择器等

## 快速开始

``` bash
# 安装
npm install vue-h5-popup -S
```

``` javascript
# 引入
import h5Popup from 'vue-h5-popup';
Vue.use(h5Popup)
```

## 示例
``` html
<!--alert-->
<modal-alert ref="alert">
  <div class="trave-tip-content txt-l" slot="content">
    <div class="confirm-text">
      <p>这里是alert提示框，我和notice有些相同，但是又有所不同，注意区分哦</p>
    </div>
  </div>
  <span slot="button">知道了</span>
</modal-alert>
```
![ VUE开发一个组件——移动端弹出层（IOS版）](http://www.javanx.cn/wp-content/themes/lensnews2.2/images/post/20181106164144.png)

``` html
<!--notice-->
<modal-notice :button="tipsBtnText" :buttonBehavior="tipsRedirect" :title="false" ref="tips">
    <div slot="content" class="tips-content">
      web秀测试试试看咯
    </div>
</modal-notice>
```
![ VUE开发一个组件——移动端弹出层（IOS版）](http://www.javanx.cn/wp-content/themes/lensnews2.2/images/post/20181106164156.png)


``` html
<!--confirm-->
<modal-confirm title="确定支付" confirm="继续支付" cancel="取消" ref="confirm" @confirm="submitPay" @cancel="$refs.confirm.close()">
    <div class="alert-content" slot="content">
        <h3></h3>
        <p class="txt-l fs28 confirm-text">你确定用支付宝支付10,000元吗？
        </p>
    </div>
</modal-confirm>
```
![ VUE开发一个组件——移动端弹出层（IOS版）](http://www.javanx.cn/wp-content/themes/lensnews2.2/images/post/20181106164208.png)

github地址： [vue-h5-popup](https://github.com/javanf/vue-h5-popup)
npm地址： [vue-h5-popup](https://www.npmjs.com/package/vue-h5-popup)

## 联系我
请移驾[web秀](http://www.javanx.cn/)
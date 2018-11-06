import modalAlert from './alert.vue'
import modalConfirm from './confirm.vue'
import modalNotice from './notice.vue'

const components = [
  modalAlert,
  modalConfirm,
  modalNotice
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  modalAlert,
  modalConfirm,
  modalNotice
}
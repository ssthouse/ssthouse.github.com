import LocalStorage from 'localforage'
var Storage = {}
Storage.install = function (Vue, options) {
  Vue.prototype.$storage = LocalStorage
}

export default Storage

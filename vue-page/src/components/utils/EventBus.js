import Vue from 'vue'

let Eventbus = {}
Eventbus.install = function (VueInstance, options) {
  VueInstance.prototype.$eventbus = new Vue()

  VueInstance.prototype.EventType = {
    OPEN_COUNT_DOWN_DIALOG: 'little/open_count_down_dialog',
    UPDATE_COUNT_DOWN_LIST: 'little/update_count_down_list'
  }
}

export default Eventbus

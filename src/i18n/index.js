import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      blog: 'Blog',
      code: 'Code',
      me: 'Me'
    }
  },
  cn: {
    message: {
      blog: '博客',
      code: '代码',
      me: '关于我'
    }
  }
}

const i18n = new VueI18n({
  locale: 'cn',
  messages
})

export default i18n

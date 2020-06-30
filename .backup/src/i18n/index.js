import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      blog: 'Blog',
      code: 'Code',
      me: 'Me'
    },
    selfDescription: 'Front-end Developer, Data Visualization enthusiast',
    aboutMe: 'About Me',
    contactMe: 'Contact Me',
    wechatQrCode: 'Wechat QE code:',
    countDate: 'It has been {dayNum} days'
  },
  cn: {
    message: {
      blog: '博客',
      code: '代码',
      me: '关于我'
    },
    selfDescription: '前端开发工程师, 数据可视化爱好者',
    aboutMe: '关于我',
    contactMe: '联系我',
    wechatQrCode: '微信二维码:',
    countDate: '与你相遇的第 {dayNum} 天'
  }
}

const i18n = new VueI18n({
  locale: 'cn',
  messages
})

export default i18n

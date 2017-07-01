import AV from 'leancloud-storage'

// 初始化leancloud服务
export function init () {
  let APP_ID = 'al5DXaGvmjcmCByiGKixzBDb-gzGzoHsz'
  let APP_KEY = 'SXrCzX0RMXHDN1HGb8w1oP4i'
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  })
}

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

export function getLittleBabyFastnote () {
  return new Promise((resolve, reject) => {
    new AV.Query('FastNoteBean')
      .equalTo('isCony', true)
      .limit(1)
      .find()
      .then(beanArray => resolve(beanArray[0]), error => reject(error))
  })
}

export function getGiantBabyFastnote () {
  return new Promise((resolve, reject) => {
    new AV.Query('FastNoteBean')
      .equalTo('isCony', false)
      .limit(1)
      .find()
      .then(beanArray => resolve(beanArray[0]), error => reject(error))
  })
}

export function testSaveObj () {
  var TestObject = AV.Object.extend('TestObject')
  var testObject = new TestObject()
  testObject.save({
    words: 'Hello World!'
  }).then(function (object) {
    alert('LeanCloud Rocks!')
  })
}

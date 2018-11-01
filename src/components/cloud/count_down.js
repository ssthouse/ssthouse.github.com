import AV from 'leancloud-storage'

export function getCountDown (isCony) {
  return new Promise((resolve, reject) => {
    new AV.Query('CountDown')
      .equalTo('is_cony', isCony)
      .find()
      .then(beanArray => resolve(beanArray), error => reject(error))
  })
}

export function createCountDown (isCony, content, targetDate) {
  return new Promise((resolve, reject) => {
    let CountDown = AV.Object.extend('CountDown')
    let newCountDown = new CountDown()
    newCountDown.save({
      is_cony: isCony,
      content: content,
      target_date: targetDate
    }).then(object => {
      console.log(object)
      resolve()
    }, err => reject(err))
  })
}

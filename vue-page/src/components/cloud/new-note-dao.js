import AV from 'leancloud-storage'

export function getLittleBabyNote () {
  return new Promise((resolve, reject) => {
    new AV.Query('NewNoteBean')
      .equalTo('isCony', true)
      .limit(1)
      .find()
      .then(beanArray => resolve(beanArray[0]), error => reject(error))
  })
}

export function getGiantBabyNote () {
  return new Promise((resolve, reject) => {
    new AV.Query('NewNoteBean')
      .equalTo('isCony', false)
      .limit(1)
      .find()
      .then(beanArray => resolve(beanArray[0]), error => reject(error))
  })
}

export function saveNewNoteBean (noteContent, isLittle) {
  if (isLittle) {
    getLittleBabyNote()
      .then(function (noteBean) {
        noteBean.set('content', noteContent)
        noteBean.save()
          .then(() => console.log('save success'), () => console.log('save fail'))
      })
  } else {
    getGiantBabyNote()
      .then(function (noteBean) {
        noteBean.set('content', noteContent)
        noteBean.save()
          .then(() => console.log('save success'), () => console.log('save fail'))
      })
  }
}

export function createInitialNote () {
  let NewNoteBean = AV.Object.extend('NewNoteBean')
  let initialConyNode = new NewNoteBean()
  initialConyNode.set('isCony', true)
  initialConyNode.set('content', 'initial note🤣🤣🤣')
  let initialGiantNote = new NewNoteBean()
  initialGiantNote.set('isCony', false)
  initialGiantNote.set('content', 'initial note🤣🤣🤣')
  initialConyNode.save()
    .then(function () {
      console.log('save cony note success')
    }, function () {
      console.log('save cony note error')
    })
  initialGiantNote.save()
    .then(function () {
      console.log('save giant note success')
    }, function () {
      console.log('save giant note error')
    })
}

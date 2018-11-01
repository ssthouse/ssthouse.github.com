class Util {

  static isEmpty (str) {
    if (str === null ||
      str === undefined ||
      str.length === 0) {
      return true
    }
    return false
  }

  static getFormatDateStr (date) {
    if (date === undefined || date === null) {
      return ''
    }
    if (!(date instanceof Date)) {
      return ''
    }
    return date.toISOString().slice(0, 10)
  }

}

export default Util

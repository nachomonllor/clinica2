import * as moment from 'moment';

export default class DateTime{
  static getCurrentDate() {
    const currentDate = moment();
    return currentDate.format("YYYY/MM/DD");
  }
  static getCurrentTime() {
    let now = new Date();
    return now.getHours() + ':' + now.getMinutes();
  }
  // compara hora elegida con hora actual y verifica que sea mayor
  static compareTimeGtThan(timeValue){
    const currentTime = moment();
    if (timeValue > currentTime.format("HH:mm") ) {
      return true
    }
    return false;
  }
}

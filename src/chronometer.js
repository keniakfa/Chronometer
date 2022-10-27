class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }
   
   

  start(printTimeCallback) {
    const addSeconds = () => {
      this.currentTime++
      if (printTimeCallback)
        printTimeCallback()
    } 
    this.intervalId = setInterval(addSeconds,1000)

  }
  
  getMinutes() {
    return Math.floor(this.currentTime / 60);
   
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return "0" + value
    return `${value}`
   
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const minutes = this.getMinutes()
    const seconds = this.getSeconds()
    
    return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`

  }

}

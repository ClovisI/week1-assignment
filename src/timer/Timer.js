class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    const timerInterval = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      }

      this.log(this.seconds);
      this.seconds -= 1;
    }, 1000);
  }
}

export default Timer;

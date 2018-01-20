import React from 'react';

class Clock extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentDidMount(){
    this.intervalId = setInterval(this.tick, 1000);
  }

  conponentWillUnmount(){
    clearInterval(this.intervalId);
  }


  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    let month = this.state.time.toDateString();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;


    return(
      <div className="clock">
        <h1>Clock</h1>
        <section className="clock-section">
          <div className="clock-divs">
            <h2>Time:</h2>
            <h2>{hours}:{minutes}:{seconds}</h2>
          </div>
          <div className="clock-divs">
            <h2>Date:</h2>
            <h2>{month}</h2>
          </div>
        </section>
      </div>
    );
  }
}

export default Clock;

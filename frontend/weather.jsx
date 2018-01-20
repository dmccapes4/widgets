import React from 'react';


class Weather extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      weather: "Loading..."
    };
  }

  getWeather(){
    return $.ajax({
      type: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather' +
      	'?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b',
    });
  }


  render (){
    console.log(this.getWeather());
    return (
      <div className="weather">

      </div>
    );
  }
}

export default Weather;

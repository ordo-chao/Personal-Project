/* eslint-disable react/prop-types */
function WeatherDisplay(props) {
  if(props.cityName === '') {
    return <p>Enter City Name</p>
  }else
  return (
    <div className="weatherDiv">
      <p>City Name:{props.cityName}</p>
      <p>City Tempearature:{props.cityTemp}</p>
      <p>City Humidity: {props.cityHum}</p>
      <p>City Weather Description:{props.cityDescription}</p>
    </div>
  )
}

export default WeatherDisplay
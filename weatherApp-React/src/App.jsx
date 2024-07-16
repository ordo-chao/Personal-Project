// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import WeatherDisplay from './weatherDsiplay'

function App() {

  const [cityNameInput, setCityNameInput] = useState('')
  const [cityTemp, setCityTemp] = useState('')
  const [cityHum, setCityHum] = useState('')
  const [cityDescription, setCityDescription] = useState('')


  return (
    <>
    <div className="App">
    <input placeholder='Enter City Name' onChange={(e) => setCityNameInput(e.target.value)}></input>
    <button onClick={
      fetchData(cityNameInput, setCityTemp, setCityHum, setCityDescription)
      }>Submit</button>
    <WeatherDisplay cityName={cityNameInput || ''} cityTemp={cityTemp || ''} cityHum={cityHum} cityDescription={cityDescription} />
    </div>
    </>
  )
}

function fetchData(cityName, setCityTemp, setCityHum, setCityDescription)
{
  fetch(`http://api.weatherapi.com/v1/current.json?key=26cb9ef771284e9da4f134805242405&q=${cityName}`)
  .then(res => res.json())
  .then(data => {
  //  console.log(data)
   setCityTemp(data.current.temp_c)
   setCityHum(data.current.humidity)
   setCityDescription(data.current.condition.text)
})
}

export default App
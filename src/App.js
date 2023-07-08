 
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const apiKEY = "e23eef116868ec3f58433af7f2536666";
  const [data, setdata] = useState({});
  const [city, setcity] = useState("")
  const Weatherdetails = async (cityName) => {

    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKEY;
    if (!cityName) {

      return;
    }
    axios.get(apiURL).then((res) => {
      console.log("respons", res.data)

      setdata(res.data)
    }).catch((err) => {
      console.log("error", err)
    })



  }

  const handlechange = (e) => {
    setcity(e.target.value);

  }

  const handlesearch = () => {
    Weatherdetails(city)

  }

  useEffect(() => {

    Weatherdetails("guwahati")

  }, []);







  return (


    <div className="background">

      <div >


        <div className="nav">
          
          <h1 className="head">WEATHER</h1>
          <input type="text" placeholder="Type city" className="search" onChange={handlechange}></input>

          <button type="button" className="button" value={city} onClick={handlesearch}>Search</button>



          {data.name && data.sys && (<h1 className="city">

            {data.name} {data.sys.country}
          </h1>
          )}


        </div>
      </div>
      <div className="App">
        <div className="temperature">
          {data.main && (
            <h2>  Temperature {((data.main.temp) - 273).toFixed(2)}°C </h2>
          )}

          {data.main && (
            <h2> Min temperature {((data.main.temp_min) - 273).toFixed(2)}°C </h2>
          )}
          {data.main && (
            <h2>
              Feel like {((data.main.feels_like) - 273).toFixed(2)}°C
            </h2>
          )}

        </div>
        <div className="rain">
          <h2>Weather</h2>


          {data.weather && (
            <h2>{data.weather[0].main}</h2>
          )}
          {data.weather && (
            <h2>{data.weather[0].description}</h2>
          )}









        </div>



        <div className="wind">
          <h2>
            Wind
          </h2>
          {data.wind && (
            <h2>
              Speed   {((data.wind.speed) * 18 / 5).toFixed(2)} km/hr
            </h2>)}
          {data.wind && (
            <h2>
              Angle {data.wind.deg}°
            </h2>
          )}
        </div>



        <div className="humidity">


          {data.main && (
            <h2>Humidity {data.main.humidity}%</h2>
          )}
          {data.main && (
            <h2>Presurre {data.main.pressure} Millibar</h2>
          )}
          {data && (
            <h2>
              Visibility   {((data.visibility) / 1000).toFixed(2)} Km
            </h2>
          )}
        </div>

      </div>
      <div className='foot'>
      <h3 className='api'><a href="https://openweathermap.org/api">GET API</a></h3>
      </div>
 

    </div>
  )

}

export default App;

 

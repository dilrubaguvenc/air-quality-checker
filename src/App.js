import React, {useState} from 'react'
import './App.css';


function App() {
  const [airQualityData, setAirQualityData] = useState(null)
  const [error, setError] = useState(null)

    const getAirQuality = async (city) => {
      try {
        const response = await fetch(`https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_AQI_API_TOKEN}`)

        const data = await response.json()
        console.log(data)
        if(response.ok && data.status === 'ok') {
          setAirQualityData(data.data)
          setError(null)
        } else {
          setError("Sorry, we couldn't find the city you were looking for. Try another location nearby or ensure your spelling is correct.")
        }
      } catch (error) {
        console.error("network error:", error)
        // set error state

        // set air quality data to null 

      }
    }
      return (
        <h1>Hello World</h1>
      );
    } 

export default App;

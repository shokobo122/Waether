import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import WeahterForm from './weahterForm'
import WeatherInfo from './weatherInfo'

export default function AppWeather() {
  let [info, setInfo] = useState({});
  const [query] = useSearchParams();
  useEffect(() => {
    doApi(query.get("q"))
  }, [query]);

  const doApi = async (_town) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${_town}&APPID=62185f38e2149f41f6c94578c1a26fdc&units=metric`;
    let resp = await axios.get(url);
    console.log(resp.data);
    setInfo(resp.data)

  }


  return (
    <React.Fragment>
      <WeahterForm doApi={doApi} />
      {info.name && <WeatherInfo info={info} />}
    </React.Fragment>
  )
}

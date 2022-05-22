import * as React from 'react'
import {Card} from '../CardItem/Card'

interface Props {
    weatherData: object[]
}

export const WeatherDataList: React.FC<Props> = ({weatherData}) => {
   
    return (
        <>
        <h3>Weather Forecast App</h3>
        <div className="weather-data-list">
            {
                weatherData && weatherData.map(({date, temperature, weatherType}: any, index: number) => {
                    return (
                        <div key={index} className="card">
                            <Card date={date} temperature={temperature} weatherType={weatherType}/>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}
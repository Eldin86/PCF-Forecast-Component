import * as React from 'react'
import { Icon } from '@fluentui/react/lib/Icon';

interface Props {
    date: string,
    weatherType: string,
    temperature: number
}

export const Card: React.FC<Props> = ({date, weatherType, temperature}) => {

    const getDayName = (date = new Date(), locale = 'en-US') => {
        return date.toLocaleDateString(locale, {weekday: 'long'});
      }

    return (
        <div className="weather-data-list">
            <div className="card">
                <p><strong>{getDayName(new Date(date))}</strong></p>
                <p>{new Date(date).toLocaleDateString()}</p>
                <p><Icon iconName={weatherType} /></p>
                <h1>{temperature}&deg;C</h1>
                <p>{weatherType}</p>
            </div>
         </div>
    )
}
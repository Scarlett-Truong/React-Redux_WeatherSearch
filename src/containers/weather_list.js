import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
    renderWeather(cityData){
        const name = cityData.city.name; // city.name la tu JSON data 
        const temps = cityData.list.map(weather => weather.main.temp);
        //const tempsinCel = _.map(cityData.list.map(weather => weather.main.temp),(temp) => temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;
        const { lon, lat } = cityData.city.coord;

        // console.log(temps);
        return(
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                {/* <td>{name}</td> */}
                <td><Chart data={temps} units="K" color="orange"/></td>
                <td><Chart data={pressures} units="hPa" color="grey"/></td>
                <td><Chart data={humidities} units="%" color="green"/></td>
            </tr>
        );
    }
    
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// function mapStateToProps (state){
//     return { weather: state.weather };
// }

// function mapStateToProps({ weather }){
//     //parameter nhu la: const weather = state.weather
//     return { weather: weather };
// }

function mapStateToProps({ weather }){
    return { weather: weather };
}

export default connect(mapStateToProps)(WeatherList);
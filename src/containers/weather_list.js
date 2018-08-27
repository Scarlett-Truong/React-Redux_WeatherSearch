import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{
    renderWeather(cityData){
        return(
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
                {/* city.name la tu JSON data  */}
            </tr>
        );
    }
    
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)};
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather } from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term : '' }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onInputChange(e){
        // console.log(e.target.value)
        this.setState({ term : e.target.value })
    }

    onFormSubmit(e){
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' }); // so that after we hit submit form, the value of the input will set again to empty
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input type="text"
                    className="form-control"
                    placeholder="Get a five-day forecast in your favourite cities"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-outline-secondary">Submit</button>
                </div>
            </form>
        );
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

//connect first para means we don't need to pass any state here
export default connect(null, mapDispatchToProps)(SearchBar);
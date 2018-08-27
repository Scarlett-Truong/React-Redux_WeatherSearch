import React, { Component } from 'react';

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term : '' }
        this.onInputChange = this.onInputChange.bind(this);
    }
    
    onInputChange(e){
        console.log(e.target.value)
        this.setState({ term : e.target.value })
    }

    onFormSubmit(e){
        e.preventDefault();
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
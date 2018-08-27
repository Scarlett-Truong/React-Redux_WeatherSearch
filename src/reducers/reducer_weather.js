import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
    console.log('Action received: ' + action);
    switch (action.type){
        case FETCH_WEATHER :
            //Dont use push because we MUST NOT change the original state BY ASSIGNING like : this.state.message = 'hello'
            //We should use this.setState INSTEAD 
            //So push() will change the original state, while concat() copy the old arr and add more ele
            // return state.push(action.payload.data);
            //return state.concat([action.payload.data]);
            return [ action.payload.data, ...state] //This will like [city, city, city] NOT [city, [city, city]]
    }
    return state;
}
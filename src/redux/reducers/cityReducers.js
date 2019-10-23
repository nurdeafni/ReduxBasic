import {ADD_CITY} from '../actions/types';

const initialState={
    cityName:'',
    city:[]
};

export default function cityReducers (state= initialState, action){
    switch(action.type){
        case ADD_CITY:
            return{
                ...state,
                city: state.city.concat({
                    key: Math.random(),
                    value: action.payload,
                })
            };
            default:
                return state;
    }
}
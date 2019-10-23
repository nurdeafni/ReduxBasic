import {INCREMENT, DECREMENT, ADD_PLACE, ADD_CITY} from './types';

export function increment(){
    return{
        type: INCREMENT,
    };
}
export function decrement(){
    return{
        type: DECREMENT,
    };
}
export const addPlace = placeName => {
    return{
        type: ADD_PLACE,
        payload: placeName,
    };
}
export const addCity = cityName => {
    return{
        type: ADD_CITY,
        payload: cityName,
    };
}
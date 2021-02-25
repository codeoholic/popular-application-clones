import { CHANGE_VARIABLE } from '../actions/type';

const INITIAL_STATE = {
	
	//A
    activity:false

};
const a = (state = INITIAL_STATE, action) =>  {
    switch (action.type) {
        case CHANGE_VARIABLE:
      		return {...state, [ action.payload.key]: action.payload.value };
        default:
            return state ;
    }
}
export { a as default };

import { 
    EMPLOYEE_UPDATE, 
    EMPLOYEE_CREATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) { 
        case EMPLOYEE_UPDATE:
            //action.payload === { prop: 'name', value: 'jane' }
            //[action.payload.prop] allows us to drop in name, phone, shift, etc so that we 
            //don't have to write out each prop name separately in the case statement
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};
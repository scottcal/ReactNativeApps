import {
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            return action.payload; 
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            //console.log('hello default');
            return state;
    }
};
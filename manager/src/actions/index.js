import 'firebase' from firebase;
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from './types';
import console = require('console');

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return(dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email,passoword)
            .then(user => console(user));
    };
};
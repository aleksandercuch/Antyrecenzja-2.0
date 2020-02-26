import authReducer from './authReducer';
import bookReducer from './bookReducer';
import imageReducer from './imageReducer';
import { combineReducers } from "redux";
import { firestoreReducer  } from "redux-firestore";
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
   auth: authReducer,
   books: bookReducer,
   image: imageReducer,
   firestore: firestoreReducer,
   firebase: firebaseReducer
});

export default rootReducer

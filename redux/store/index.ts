import {createStore, AnyAction, Store} from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import rootReducer from './reducers';
import { RootStateInterface } from '../interfaces';

// create a makeStore function
const makeStore = (context: Context) => createStore(rootReducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootStateInterface>>(makeStore, {debug: true});
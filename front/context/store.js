import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducerDefinitions from './reducerDefinition';

const createReducer = (type, initialState) => {
    return (state = initialState, action) => {
        if (action.type === type) {
            if (action.state === null) {
                return null;
            }

            return {
                ...state,
                ...action.state,
            };
        }

        return state;
    };
};

const reducers = reducerDefinitions.reduce((acc, item) => {
    return {
        ...acc,
        [item.type]: createReducer(item.type, item.initialState),
    };
}, {});

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: reducerDefinitions.filter(o => o.isPersistent).map(o => o.type),
};

const rootReducer = combineReducers(reducers);

const store = createStore(persistReducer(rootPersistConfig, rootReducer));

const persistor = persistStore(store);

const dispatch = (type, state) => {
    store.dispatch({
        type,
        state,
    });
};

export {dispatch, store, persistor};
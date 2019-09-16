import {createStore} from 'redux';
import reducer from './reducers';
import {
    obtenerStorage,
    guardarStorage
} from './loocalstorage';

//Definir store inicial 
// const initialState = [];

const storage = obtenerStorage();

const store = createStore(
    reducer,
    storage,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

store.subscribe( () => {
    guardarStorage({
        citas: store.getState().citas
    })
})
export default store;
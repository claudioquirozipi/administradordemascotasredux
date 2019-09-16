import React from 'react';

//Redux
import store from './store';
import {Provider} from 'react-redux';

//Components
import AgregarCita from './components/agregarCita';
import ListadoCitas from './components/listadoCitas';

function App() {  
  
  return (
    <Provider store={store}>

      <div className="container">
        <h1 className="text-center">Administrador de mascotas</h1 >
        <div className="row">
          <div className="col-md-6">
            <AgregarCita />
          </div>
          <div className="col-md-6">
            <ListadoCitas />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;

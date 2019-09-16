import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {borrarCitaAction} from '../actions/citaActions';

function ListadoCitas() {
    const citas = useSelector((state)=> state.citas);
    const mensaje = Object.keys(citas.citas).length === 0 ? 'No hay citas': 'Administa citas aquí';

    const dispatch = useDispatch();
    return(
        <>
            <div className="card mt-4">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>
                    <div className="lista-citas">
                        {citas.citas.map(cita => (
                            <div className="card mt-3" key={cita.id}>
                                <div className="card-body">
                                    <h2 className="mt-0">{cita.mascota}</h2>
                                    <p className="card-text"><span>Nombre Dueño:</span>{cita.propietario}</p>
                                    <p className="card-text"><span>Fecha:</span>{cita.fecha}</p>
                                    <p className="card-text"><span>Hora:</span> {cita.hora} </p>
                                    <p className="card-text"><span>Sintomas:</span> <br /> {cita.sintomas} </p>
                                    <button 
                                        onClick={()=>dispatch(borrarCitaAction(cita.id))}
                                        className="btn btn-danger">Borrar &times;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
           
        </>
    );
}

export default ListadoCitas;
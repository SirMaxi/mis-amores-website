import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function AdminOptions(props) {

    const { userData } = useContext(UserContext);
    let history = useHistory();


    //Conseguir el id del muneco para borrarlo
    const deleteToy = async(id) => {
        await Axios.delete('http://localhost:5000/toys/delete/' + id);
        alert('Muñeco borrado satisfactoriamente');
        history.go();
}

    //Tiene que llevarme al formulario de crear muñeco y ahi cambiarlo
    const editToy = (properties) => {
        history.push({
            pathname: '/toys/edit',
            state: {
                data: properties
            }
        })
    }

return (
        
        <div>
                {userData.user ? (
                <>
                <br/>
                <button className="btn btn-warning" onClick={() => (editToy(props))}>
                    Editar Muñeco
                </button>
                <br/>       
                <br/>       
                <button className="btn btn-danger" onClick={() => deleteToy(props.value._id)}>
                    Eliminar Muñeco
                </button>
                
                </>
            ) : (
                <>
                </>
            )}
        </div>
    )
}

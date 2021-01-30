import React from 'react';
import Navbar from '../componentes/Navbar';
import Body from '../componentes/Body';
import Fonter from '../componentes/Fonter';

class PaginaNueva extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Body/>
                <Fonter/>
            </div>
           
        );
    }
}

export default PaginaNueva;
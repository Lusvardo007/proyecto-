import React from 'react';



class Navbar extends React.Component{
    render(){
        return(
            <div className="Badge">
                <div className="row">
                
                        <h1 className="col-2" >Creana</h1>
                        <select  className="col-sm-2"  name="seleccione ">
                            <option value="1">Windows Vista</option> 
                            <option value="2">Windows 7</option> 
                            <option value="3">Windows XP</option>
                            <option value="10">Fedora</option> 
                            <option value="11">Debian</option> 
                            <option value="12">Suse</option> 
                        </select>
                        <input  className="col-6 .col-md-4"  type="search" name="busquedamusica" placeholder="Busca el curso"></input>
                        <button className="col-2"  type="button" class="btn btn-primary btn-sm">Carrito</button>
                        <button className="col-2"  type="button" class="btn btn-danger">Registrarse</button>
                
                       
                       
                   
                </div>

                <div> 
                    
                        <h3  className="col-2" className="Centrar">Adelantetate al BlackFriday ¡desde hoy!</h3>
                        <h4  className="col-2" className="Centrar">Tienes cuatro curso a $4</h4>
                   
                </div>

                <div>
                    <h3  className="col-2" className="Centrar">Adelantetate al BlackFriday ¡desde hoy!</h3>
                    <h4  className="col-2" className="Centrar">Tienes cuatro curso a $4</h4>
                    

                </div>
                <div  className="cuadro" >
                    <h4>Oferta termina en: </h4>
                    <h3> 00 : 55: 22</h3>
                    <h4>hr   min  seg</h4>  

                </div>
            </div>
            
        );
    }
}

export default Navbar;
import React from 'react';



class Body extends React.Component{
    render(){
        return(
            <div  class="container" className="Body"  >
                <div class="row 6">
             
                    <button class="col-md-2"   type="button" class="btn btn-danger">Filtrar
                    <span class="glyphicon glyphicon-start"></span>
                    </button>
             
                    <button className="col-90"  type="button" class="btn btn-danger">Ordenear</button>
    
                     <input  className="col-6 .col-md-4"  type="search" name="buscacurso" placeholder="Busca el curso"></input>
                
                       

                </div>
            </div>
      
            
        );
    }
}

export default Body;
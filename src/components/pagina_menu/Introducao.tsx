import "./Introducao.css";
import "./../../styles/global.css"

export default function Introducao() {
    
  return (

      <div className="container-fluid papel-parede-introducao">
          {/**Overlay aplicado no papel de parede */}
          <div className="overlay-papeis-parede"></div>

          <div className="container justify-content-center text-light">
            <div className="row">

              <div className="col-12">
                {/*Cabeçalhos*/}
                   <div className="text-uppercase text-center mt-5">
              <h1 className="">Livro de Exercício</h1>
              <h1 className="fonte-aip">AIP</h1>
              <br/>
              <p className="lead">INSTRUÇÕES</p>
              <hr className="border border-2"/>
            </div>

              {/**Menu de instruções */}
              <div>
                <p className="lead">Escolha entre cada dupla de frases, aquela que lhe desperte maior
                interesse, preenchendo o quadrado correspondente, clicando em cima
                dele, na folha de respostas a seguir.</p>

                <div className="card">
                  <table className="table table-hover table-elegant">
                    <tbody>
                      <tr>
                        <td>Gosto mais dessa alternativa</td>
                        <td>001</td>
                        <div className="quadrado-verde"></div>
                      </tr>
                      <tr>
                        <td>Gosto menos dessa alternativa</td>
                        <td>002</td>

                      </tr>
                    </tbody>
                  </table>
                </div>

                

              
                

              </div>



              </div>
            </div>
            
           
            

          </div>

      </div>
  );
}
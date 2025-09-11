
import  "./Questionario.css";
import "./../../styles/global.css";
import perguntasQuestionario from "../../Javascript/Perguntas.tsx";




export default function Questionario(){




    return(
        <div className="container-fluid plano-de-fundo-questionario text-white">
          

            {/**Overlay da imagem */}
            <div className="overlay-papeis-parede"></div>

            <div className="container content-wrapper ">

            <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-9">
                    {/**Título */}
                    <div className="text-center mb-5">
                      <h2 className="gradient-text">Perguntas</h2>
                      <div className="linha-decorativa mx-auto my-4"></div>
                    </div>
                </div>

              {/* Perguntas */}
              {perguntasQuestionario.map((par) => (
                <div key={par.par} className="example-card mb-4">
                  <table className="table table-elegant">
                    <tbody>
                      {par.opcoes.map((opcao) => (
                        <tr key={opcao.numero}>
                          <td className="number-cell">
                            {String(opcao.numero).padStart(3, "0")} {/**3 colunas número, começa com 0. ex: 001, 002, 003*/}
                          </td>

                          <td className="option-text ">
                            {opcao.descricao_pergunta}
                          </td>

                          <td className="checkbox-cell">
                            <p className="option-text"> Gostei</p>
                            <div className="quadrado quadrado-preenchido-verde"></div>
                          </td>

                          <td className="checkbox-cell">
                           <p className="option-text"> Não gostei</p>
                            <div className="quadrado quadrado-preenchido-vermelho"></div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
              
            </div>
               

               <button className="btn btn-custom btn-lg px-5 py-3 ms-5">Enviar Resultado</button>
            </div>

        </div>
    );
}
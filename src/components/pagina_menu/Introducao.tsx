import "./Introducao.css";
import "./../../styles/global.css";

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
              <h1 className="display-6">Livro de Exercício</h1>
              <h1 className="fonte-aip">AIP</h1>
              <br />
              <p className="lead">INSTRUÇÕES</p>
              <div className="border border-2 linha-decorativa"/>

            </div>

            {/**Menu de instruções */}
            <div className="mt-4">


              
              <p className="lead">
                Escolha entre cada dupla de frases, aquela que lhe desperte
                maior interesse, preenchendo o quadrado correspondente, clicando
                em cima dele, na folha de respostas a seguir.
              </p>

              <div className="card card-template">

                {/**Caso gostou de alguma */}
                <table className="table table-hover table-elegant">
                  <tbody>
                    <tr className="textos-instrucao">
                      <td>Gostei mais dessa alternativa</td>
                      <td className="numero_perguntas">001</td>

                      <td className="quadrado-container">
                            <div className="quadrado-verde"></div>
                      </td>
                      
                    </tr>
                    
                    {/**Caso gostou menos de alguma */}
                    <tr className="textos-instrucao">
                      <td>Gostei menos dessa alternativa</td>
                      <td className="numero_perguntas">002</td>
                      
                      <td className="quadrado-container">
                          <div className="quadrado-laranja"></div>
                      </td>
                      
                    </tr>
                  </tbody>
                </table>
                
              </div>

              {/**Caso gostou de ambas */}

              <p className="lead">
                Você pode marcar as duas, caso tenha muito interesse em ambas,
                preenchendo o quadrado ao lado dos números.
              </p>

              <div className="card card-template">
                <table className="table table-hover table-elegant">
                  <tbody>
                    <tr className="textos-instrucao">
                      <td>Gostei muito dessa alternativa</td>
                      <td className="numero_perguntas">001</td>
                      <td className="quadrado-container">
                          <div className="quadrado-verde"></div>
                      </td>
                      
                    </tr>
                    <tr className="textos-instrucao">
                      <td>Gostei muito dessa alternativa também.</td>
                      <td className="numero_perguntas">002</td>
                      <td className="quadrado-container">
                        <div className="quadrado-verde"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/**Caso não gostou de nenhuma */}

              <p className="lead">
                Caso você não goste de nenhuma das duas opções, deverá mesmo
                assim escolher uma delas. Nessa situação, preencha somente até a
                metade do quadrado do número.
              </p>

              <div className="card card-template">
                <table className="table table-elegant">
                  <tbody>
                    <tr className="textos-instrucao">
                      <td>Não gostei nada dessa alternativa</td>
                      <td className="numero_perguntas">001</td>
                      <td className="quadrado-container">
                        <div className="quadrado-vermelho"></div>
                      </td>
                    </tr>

                    <tr className="textos-instrucao">
                      <td>
                        Também não gostei dessa alternativa, mas marcarei por
                        obrigação.
                      </td>
                      <td className="numero_perguntas mt-2">002</td>
                      <td className="quadrado-container">
                            <div className="quadrado-vermelho mt-3 justify-content-center align-middle"></div>
                      </td>
                      
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/*Botão Avançar Próxima etapa */}
            <button className="botao-customizado textos-instrucao justify-content-center">
              Acessar próxima página
              </button>


          </div>
        </div>
      </div>
    </div>
  );
}


/**Será criado 3 opç~eões... Gostei mais dessa anternativa, Gostei menos dessa alternativa, gostei nada dessa alternativa.
 * 
 * Mais receberá cor verde, menos cor laranja-amarela, e nada, cor vermelho
 */
import "./Questionario.css";
import  "./../../styles/global.css";
import {useState} from 'react';
import perguntasQuestionario from "./../../Javascript/Perguntas.tsx";
import OpcaoResposta from "./OpcaoResposta.tsx";

export default function Questionario(){

  
    //Estado para armazenar as respostas
    const [resposta, setResposta] = useState({});

    //Função para capturar as respostas
    const capturarResposta = (numeroPergunta, tipoResposta) => {
      setResposta(respostasAnteriores => ({ //Alterar o estado da resposta
        ...respostasAnteriores, //Capturando os resultados já salvos das respostas anteriores
        [numeroPergunta] : tipoResposta //Novas respostas, pegas do numero da pergunta, para o tipo de resposta
      }));
    };

    //Função para verificar se está selecionado uma opção
    const estaSelecionado = (numeroPergunta, tipoResposta) => {
      return resposta[numeroPergunta] === tipoResposta;
    };




    {/**Retornar este DOM */}
  return(

    <div className="container-fluid questionario-wallpaper">
      <div className="overlay-papeis-parede"></div> {/**Efeito Overlay */}


      {/**Div container das questões */}
      <div className="container">

          <div className="row">

            <h1 className="text-uppercase text-center mt-3 fonte-aip"
            style={{
              fontFamily: 'sans-serif'
            }}
            >PERGUNTAS</h1>
            <hr className="linha-decorativa"/>

            {/*Mapeando todos os card, de acordo com a quantidade de cada par. São 200 perguntas,
            cada card possui 2 perguntas, totalizando 100 cards. */}
            <div className="col-12">
                {perguntasQuestionario.map((par, parIndex) =>(
                    <div 
                    key={`par-${par.par}`} //Key única e descritiva
                    className="card-template mb-4">

                        {/**Aninhando outro map - Percorre cada pergunta do par. */}

                        {/**Chave para identificar, baseado no número da pergunta.  */}
                        {par.opcoes.map((opcao, opcaoIndex) =>(
                          <div key={`pergunta-${opcao.numero}`} 
                          className="row align-items-center py-3"
                          style={{
                            borderBottom: opcaoIndex < par.opcoes.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none' 
                            // Criar apenas um risco (linha divisória) entre as perguntas
                        }}
                          > 
                          
                        <div className="col-2">
                            <span className="numero_perguntas text-white">
                        {opcao.numero.toString().padStart(3, "0")}
                        </span>
                        </div>
                      
                          {/**Descrição das perguntas */}
                            <div className="col-6">
                              <p className="descricao-pergunta">{opcao.descricao_pergunta}</p>
                            </div>


                            {/**Alternativas das respostas */}
                            <div className="col-4 py-2">

                              <OpcaoResposta
                              numero={opcao.numero}
                              tipo="gostei_muito"
                              label= "GOSTEI MUITO"
                              corQuadrado="rgba(64,255,21,0.847)"
                              capturarResposta={capturarResposta}
                              estaSelecionado={estaSelecionado}
                              />

                                <OpcaoResposta
                              numero={opcao.numero}
                              tipo="gostei_menos"
                              label= "GOSTEI MENOS"
                              corQuadrado="rgba(255,191,0,0.932)"
                              capturarResposta={capturarResposta}
                              estaSelecionado={estaSelecionado}
                              />

                                <OpcaoResposta
                              numero={opcao.numero}
                              tipo="nao_gostei"
                              label= "NÃO GOSTEI"
                              corQuadrado="rgba(255,0,0,0.932)"
                              capturarResposta={capturarResposta}
                              estaSelecionado={estaSelecionado}
                              />
                              
                            </div>
                              

                              
                          </div>
                        ))}


                    </div>
                ))}

                
                <button className="botao-customizado mt-4"
             
                >Enviar Resultado</button>
            </div>

          </div>
      </div>
    </div>

  );
}
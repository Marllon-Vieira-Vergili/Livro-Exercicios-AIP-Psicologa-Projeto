    
    
    //Componente para renderizar uma opção da resposta
    const OpcaoResposta = ({numero, tipo, label, corQuadrado, capturarResposta, estaSelecionado}) =>(

      <div
      className="quadrado-container-questionario"
      onClick={() => capturarResposta(numero,tipo)}
      style={{cursor: 'pointer'}}>

        <small className="descricao-pergunta">{label}</small>

        <div className={`quadrado-resposta ${estaSelecionado(numero,tipo) ? 'selecionado' : ''}`}
        style={{
          width: '25px',
          height: '25px',
          borderRadius: '5px',
          margin: '5px auto',
          border: '2px solid white',
          backgroundColor: estaSelecionado(numero,tipo) ? corQuadrado : 'transparent',
         transition: 'all 0.3s ease'
        }}
        />

        
      </div>
    );


    //Exportar OpcaoResposta
    export default OpcaoResposta;

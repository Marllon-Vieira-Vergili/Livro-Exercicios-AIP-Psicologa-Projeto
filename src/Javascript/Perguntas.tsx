//Perguntas do questionário, separado por seus devidos pares..


//Interfaces
interface Opcao {
    numbero : number;
    descricao_pergunta: string;
}

interface ParPerguntas {
    par: number;
    opcoes: Opcao[];
}

const perguntasQuestionario = [ 
{
    par: 1,
    opcoes: [
        {numero: 1, descricao_pergunta: "Participar de projetos para a preservação das baleias."},
        {numero: 2, descricao_pergunta: "Conhecer um programa de computador para controlar despesas de uma firma."}
    ]
},
{
    par: 2,
    opcoes: [
        {numero: 3, descricao_pergunta: "Ajudar no planejamento de núcleos de informática para as escolas."},
        {numero: 4, descricao_pergunta: "Conhecer o funcionamento dos poderes Executivo, Legislativo e Judiciário."}
    ] 
},
{
    par: 3,
    opcoes: [
        {numero: 5, descricao_pergunta: "Fazer a estatística de uma pesquisa sobre nível intelectual da juventude."},
        {numero: 6, descricao_pergunta: "Tentar convencer um amigo a deixar de beber."}
    ] 
},
{
    par: 4,
    opcoes: [
        {numero: 7, descricao_pergunta: "Aprimorar o uso do raio laser para cirurgias."},
        {numero: 8, descricao_pergunta: "Pesquisar o funcionamento dos sistemas de comunicação por telefone celular."}
    ] 
},
{
    par: 5,
    opcoes: [
        {numero: 9, descricao_pergunta: "Orientar pais na adaptação de crianças pequenas à escola."},
        {numero: 10, descricao_pergunta: "Coordenar o armazenamento e a distribuição de mercadorias."}
    ] 
},
{
    par: 6,
    opcoes: [
        {numero: 11, descricao_pergunta: "Pesquisar as origens das palavras na língua portuguesa."},
        {numero: 12, descricao_pergunta: "Calcular o tempo de retorno do dinheiro investido na abertura de uma firma."}
    ] 
},
{
    par: 7,
    opcoes: [
        {numero: 13, descricao_pergunta: "Desenhar um moderno ginásio de esportes."},
        {numero: 14, descricao_pergunta: "Conhecer um instituto de estudos ecológicos."}
    ] 
},
{
    par: 8,
    opcoes: [
        {numero: 15, descricao_pergunta: "Conhecer a fórmula química dos refrigerantes."},
        {numero: 16, descricao_pergunta: "Ler um livro sobre a vida de sucesso de grandes empresários."}
    ] 
},
{
    par: 9,
    opcoes: [
        {numero: 17, descricao_pergunta: "Acompanhar as políticas de inclusão de deficientes no sistema educacional."},
        {numero: 18, descricao_pergunta: "Buscar patrocinadores para apoiar um show da banda da escola."}
    ] 
},
{
    par: 10,
    opcoes: [
        {numero: 19, descricao_pergunta: "Calcular a velocidade de um cometa."},
        {numero: 20, descricao_pergunta: "Acompanhar as descobertas sobre células-tronco."}
    ] 
},
{
    par: 11,
    opcoes: [
        {numero: 21, descricao_pergunta: "Assistir a um debate sobre a influência da propaganda no consumismo."},
        {numero: 22, descricao_pergunta: "Servir de intermediário nas negociações para libertar uma vítima de rapto."}
    ] 
},
{
    par: 12,
    opcoes: [
        {numero: 23, descricao_pergunta: "Acompanhar o desempenho de ações na Bolsa de Valores."},
        {numero: 24, descricao_pergunta: "Estudar os riscos de contaminação em embalagens de alimentos."}
    ] 
},
{
    par: 13,
    opcoes: [
        {numero: 25, descricao_pergunta: "Participar de uma miniempresa organizada pela escola."},
        {numero: 26, descricao_pergunta: "Estudar lesões musculares em atletas."}
    ] 
},
{
    par: 14,
    opcoes: [
        {numero: 27, descricao_pergunta: "Pesquisar o grau de estresse de vigilantes noturnos."},
        {numero: 28, descricao_pergunta: "Dar apoio emocional para uma pessoa acidentada."}
    ] 
},
{
    par: 15,
    opcoes: [
        {numero: 29, descricao_pergunta: "Compor a letra de um hino para seu colégio."},
        {numero: 30, descricao_pergunta: "Realizar estágio em um laboratório de cosméticos."}
    ] 
},
{
    par: 16,
    opcoes: [
        {numero: 31, descricao_pergunta: "Escolher quadros para decorar uma sala de recepção."},
        {numero: 32, descricao_pergunta: "Adaptar eletrodomésticos ao uso de controle remoto."}
    ] 
},
{
    par: 17,
    opcoes: [
        {numero: 33, descricao_pergunta: "Acompanhar o desenvolvimento de um processo trabalhista contra uma empresa."},
        {numero: 34, descricao_pergunta: "Ler um artigo sobre a desigualdade social."}
    ] 
},
{
    par: 18,
    opcoes: [
        {numero: 35, descricao_pergunta: "Desenhar fantasias para o carnaval."},
        {numero: 36, descricao_pergunta: "Criar palavras-chave para um dicionário de sinônimos."}
    ] 
},
{
    par: 19,
    opcoes: [
        {numero: 37, descricao_pergunta: "Pesquisar tratamento para células cancerígenas."},
        {numero: 38, descricao_pergunta: "Pesquisar tratamento para a asma."}
    ] 
},
{
    par: 20,
    opcoes: [
        {numero: 39, descricao_pergunta: "Montar um castelo com cartas de baralho."},
        {numero: 40, descricao_pergunta: "Ler sobre o tratamento físico-químico de esgoto."}
    ] 
},
{
    par: 21,
    opcoes: [
        {numero: 41, descricao_pergunta: "Escrever um livro sobre o tipo de linguagem utilizada pelos jovens na Internet."},
        {numero: 42, descricao_pergunta: "Ler sobre a vida e a obra de personagens famosos da História."}
    ] 
},
{
    par: 22,
    opcoes: [
        {numero: 43, descricao_pergunta: "Realizar estágio em um escritório de contabilidade."},
        {numero: 44, descricao_pergunta: "Ouvir um palestrante sobre questões da Economia mundial."}
    ] 
},
{
    par: 23,
    opcoes: [
        {numero: 45, descricao_pergunta: "Pesquisar o padrão de vida dos caminhoneiros."},
        {numero: 46, descricao_pergunta: "Inventar um novo tipo de forno de micro-ondas."}
    ] 
},
{
    par: 24,
    opcoes: [
        {numero: 47, descricao_pergunta: "Instruir funcionários de uma loja a agir de acordo com o Código de Defesas do Consumidor."},
        {numero: 48, descricao_pergunta: "Frequentar uma exposição de Arte Moderna."}
    ] 
},
{
    par: 25,
    opcoes: [
        {numero: 49, descricao_pergunta: "Visitar um hospital psiquiátrico."},
        {numero: 50, descricao_pergunta: "Ler estudos científicos sobre o avanço da AIDS."}
    ] 
},
{
    par: 26,
    opcoes: [
        {numero: 51, descricao_pergunta: "Calcular os juros e a correção para compra parcelada de um carro."},
        {numero: 52, descricao_pergunta: "Prever custos de viagem ao exterior considerando valores internacionais."}
    ] 
},
{
    par: 27,
    opcoes: [
        {numero: 53, descricao_pergunta: "Buscar um acordo entre as partes num processo de separação de casal."},
        {numero: 54, descricao_pergunta: "Transformar uma obra literária em roteiro para peça teatral."}
    ] 
},
{
    par: 28,
    opcoes: [
        {numero: 55, descricao_pergunta: "Assistir a um vídeo sobre parto cesariano."},
        {numero: 56, descricao_pergunta: "Ser comentarista de esportes no rádio."}
    ] 
},
{
    par: 29,
    opcoes: [
        {numero: 57, descricao_pergunta: "Reprogramar os semáforos para melhorar o fluxo do trânsito em grandes cidades."},
        {numero: 58, descricao_pergunta: "Criar personagens para uma história infantil."}
    ] 
},
{
    par: 30,
    opcoes: [
        {numero: 59, descricao_pergunta: "Estabelecer a rotina de atendimento aos hóspedes de um hotel."},
        {numero: 60, descricao_pergunta: "Coordenar a distribuição e venda de produtos de uma cooperativa."}
    ] 
},
{
    par: 31,
    opcoes: [
        {numero: 61, descricao_pergunta: "Estudar os aspectos emocionais que interferem na alfabetização."},
        {numero: 62, descricao_pergunta: "Visitar laboratório de pesquisas de novos solventes."}
    ] 
},
{
    par: 32,
    opcoes: [
        {numero: 63, descricao_pergunta: "Traduzir para o português a letra de uma música americana."},
        {numero: 64, descricao_pergunta: "Ler sobre os acordos de paz no cenário internacional."}
    ] 
},
{
    par: 33,
    opcoes: [
        {numero: 65, descricao_pergunta: "Fazer estágio num escritório de advocacia."},
        {numero: 66, descricao_pergunta: "Projetar um novo tipo de impressora portátil."}
    ] 
},
{
    par: 34,
    opcoes: [
        {numero: 67, descricao_pergunta: "Produzir impressos para divulgar uma festa."},
        {numero: 68, descricao_pergunta: "Aprender a utilizar ferramentas de desenho no computador."}
    ] 
},
{
    par: 35,
    opcoes: [
        {numero: 69, descricao_pergunta: "Analisar o teor calórico de diferentes alimentos."},
        {numero: 70, descricao_pergunta: "Ajudar na instalação de equipamentos para uso de cartões eletrônicos."}
    ] 
},
{
    par: 36,
    opcoes: [
        {numero: 71, descricao_pergunta: "Aprender a ler e escrever notas musicais."},
        {numero: 72, descricao_pergunta: "Defender sua posição num debate sobre a pena de morte."}
    ] 
},
{
    par: 37,
    opcoes: [
        {numero: 73, descricao_pergunta: "Organizar cronograma de aulas de uma escola."},
        {numero: 74, descricao_pergunta: "Elaborar argumentos para defender uma pessoa acusada de um crime."}
    ] 
},
{
    par: 38,
    opcoes: [
        {numero: 75, descricao_pergunta: "Ser o tesoureiro de um grêmio estudantil."},
        {numero: 76, descricao_pergunta: "Pesquisar sobre a melhor maneira de alfabetizar crianças."}
    ] 
},
{
    par: 39,
    opcoes: [
        {numero: 77, descricao_pergunta: "Fazer pós-graduação em Física no exterior."},
        {numero: 78, descricao_pergunta: "Assistir a um congresso sobre grandes negócios."}
    ] 
},
{
    par: 40,
    opcoes: [
        {numero: 79, descricao_pergunta: "Ler sobre os animais e suas formas de reprodução."},
        {numero: 80, descricao_pergunta: "Esculpir peças artísticas em madeira."}
    ] 
},
{
    par: 41,
    opcoes: [
        {numero: 81, descricao_pergunta: "Entrevistar políticos para um trabalho escolar."},
        {numero: 82, descricao_pergunta: "Conhecer o funcionamento eletroquímico de pilhas e baterias."}
    ] 
},
{
    par: 42,
    opcoes: [
        {numero: 83, descricao_pergunta: "Ler sobre o Direito Romano."},
        {numero: 84, descricao_pergunta: "Estudar as diferentes vitaminas e suas funções."}
    ] 
},
{
    par: 43,
    opcoes: [
        {numero: 85, descricao_pergunta: "Escrever um artigo sobre o hábito de leitura no Brasil."},
        {numero: 86, descricao_pergunta: "Fazer um curso sobre técnica de pintura texturizada."}
    ] 
},
{
    par: 44,
    opcoes: [
        {numero: 87, descricao_pergunta: "Estudar os princípios da aerodinâmica de uma asa-delta."},
        {numero: 88, descricao_pergunta: "Conhecer documentos necessários para abrir uma microempresa."}
    ] 
},
{
    par: 45,
    opcoes: [
        {numero: 89, descricao_pergunta: "Acompanhar a administração de sua cidade."},
        {numero: 90, descricao_pergunta: "Calcular os custos para educação de um filho no curso superior."}
    ] 
},
{
    par: 46,
    opcoes: [
        {numero: 91, descricao_pergunta: "Atuar no controle de substâncias químicas prejudiciais à camada de ozônio."},
        {numero: 92, descricao_pergunta: "Descobrir a fórmula de um novo produto para emagrecer."}
    ] 
},
{
    par: 47,
    opcoes: [
        {numero: 93, descricao_pergunta: "Convencer os colegas sobre a melhor estratégia para sua equipe esportiva."},
        {numero: 94, descricao_pergunta: "Utilizar aparelhos para medir a pressão atmosférica."}
    ] 
},
{
    par: 48,
    opcoes: [
        {numero: 95, descricao_pergunta: "Construir uma página na Internet."},
        {numero: 96, descricao_pergunta: "Calcular custo e benefício de aplicar verbas de uma empresa em marketing."}
    ] 
},
{
    par: 49,
    opcoes: [
        {numero: 97, descricao_pergunta: "Realizar exame psicológico em criminosos."},
        {numero: 98, descricao_pergunta: "Coletar provas que documentem um crime."}
    ] 
},
{
    par: 50,
    opcoes: [
        {numero: 99, descricao_pergunta: "Transcrever uma mensagem em Código Morse."},
        {numero: 100, descricao_pergunta: "Estudar um meio de combater doenças infecto-contagiosas."}
    ] 
},
{
    par: 51,
    opcoes: [
        {numero: 101, descricao_pergunta: "Conhecer o princípio mecânico da robótica industrial."},
        {numero: 102, descricao_pergunta: "Pesquisar métodos químicos para provocar chuva."}
    ] 
},
{
    par: 52,
    opcoes: [
        {numero: 103, descricao_pergunta: "Acompanhar programas sociais em prol da diminuição da violência."},
        {numero: 104, descricao_pergunta: "Fazer estágio num grande escritório de investimentos financeiros."}
    ] 
},
{
    par: 53,
    opcoes: [
        {numero: 105, descricao_pergunta: "Projetar um espaço ideal para um camping."},
        {numero: 106, descricao_pergunta: "Divulgar novos produtos em anúncios de rádio."}
    ] 
},
{
    par: 54,
    opcoes: [
        {numero: 107, descricao_pergunta: "Ser o orador de sua turma de formatura."},
        {numero: 108, descricao_pergunta: "Conhecer bem as medicações homeopáticas."}
    ] 
},
{
    par: 55,
    opcoes: [
        {numero: 109, descricao_pergunta: "Pesquisar dados para calcular o valor da cesta básica."},
        {numero: 110, descricao_pergunta: "Catalogar livros por assunto."}
    ] 
},
{
    par: 56,
    opcoes: [
        {numero: 111, descricao_pergunta: "Pesquisar tintas especiais para prevenir a ferrugem."},
        {numero: 112, descricao_pergunta: "Pesquisar o grau de agressividade dos alunos de uma escola."}
    ] 
},
{
    par: 57,
    opcoes: [
        {numero: 113, descricao_pergunta: "Conhecer os melhores softwares para controle de estoque."},
        {numero: 114, descricao_pergunta: "Resumir um livro para um texto de duas páginas."}
    ] 
},
{
    par: 58,
    opcoes: [
        {numero: 115, descricao_pergunta: "Fazer um curso sobre primeiros socorros."},
        {numero: 116, descricao_pergunta: "Ajudar a projetar membros eletrônicos para pessoas amputadas."}
    ] 
},
{
    par: 59,
    opcoes: [
        {numero: 117, descricao_pergunta: "Entrevistar um candidato a governador."},
        {numero: 118, descricao_pergunta: "Conhecer programas modernos para controle de folha de pagamento."}
    ] 
},
{
    par: 60,
    opcoes: [
        {numero: 119, descricao_pergunta: "Cuidar dos interesses jurídicos de uma empresa."},
        {numero: 120, descricao_pergunta: "Aprender a montar uma empresa com pouco investimento."}
    ] 
},
{
    par: 61,
    opcoes: [
        {numero: 121, descricao_pergunta: "Participar do projeto de expansão de uma cidade."},
        {numero: 122, descricao_pergunta: "Cuidar do tratamento químico da água dessa cidade."}
    ] 
},
{
    par: 62,
    opcoes: [
        {numero: 123, descricao_pergunta: "Conhecer o funcionamento de uma máquina fotográfica digital."},
        {numero: 124, descricao_pergunta: "Desenhar modelos de poltronas confortáveis para uma sala de cinema."}
    ] 
},
{
    par: 63,
    opcoes: [
        {numero: 125, descricao_pergunta: "Participar de uma campanha de vacinação contra a paralisia infantil."},
        {numero: 126, descricao_pergunta: "Pesquisar a melhor distribuição de produtos em prateleiras de supermercados."}
    ] 
},
{
    par: 64,
    opcoes: [
        {numero: 127, descricao_pergunta: "Orientar jovens na escolha da profissão."},
        {numero: 128, descricao_pergunta: "Ser o vocalista de uma banda."}
    ] 
},
{
    par: 65,
    opcoes: [
        {numero: 129, descricao_pergunta: "Conhecer leis sobre impostos para importação de produtos."},
        {numero: 130, descricao_pergunta: "Visitar uma usina de energia elétrica."}
    ] 
},
{
    par: 66,
    opcoes: [
        {numero: 131, descricao_pergunta: "Estudar o crescente índice de obesidade infantil."},
        {numero: 132, descricao_pergunta: "Assistir ao debate para aprovar uma nova lei de trânsito."}
    ] 
},
{
    par: 67,
    opcoes: [
        {numero: 133, descricao_pergunta: "Ler sobre o papel dos imigrantes na formação da sociedade contemporânea."},
        {numero: 134, descricao_pergunta: "Ajudar a montar o cenário de uma peça teatral."}
    ] 
},
{
    par: 68,
    opcoes: [
        {numero: 135, descricao_pergunta: "Pesquisar sobre os efeitos do uso de anabolizantes em atletas."},
        {numero: 136, descricao_pergunta: "Aprender línguas estrangeiras."}
    ] 
},
{
    par: 69,
    opcoes: [
        {numero: 137, descricao_pergunta: "Organizar e dividir tarefas entre grupos de escoteiros."},
        {numero: 138, descricao_pergunta: "Entender como funciona um aparelho hospitalar de ressonância magnética."}
    ] 
},
{
    par: 70,
    opcoes: [
        {numero: 139, descricao_pergunta: "Calcular o custo de revenda de carros usados."},
        {numero: 140, descricao_pergunta: "Fazer uma maquete para cenário de um filme."}
    ] 
},
{
    par: 71,
    opcoes: [
        {numero: 141, descricao_pergunta: "Observar o tratamento físico-químico de águas de piscinas."},
        {numero: 142, descricao_pergunta: "Fazer um curso sobre técnicas de persuasão e vendas."}
    ] 
},
{
    par: 72,
    opcoes: [
        {numero: 143, descricao_pergunta: "Ler artigos sobre os problemas do desemprego."},
        {numero: 144, descricao_pergunta: "Coordenar um debate político."}
    ] 
},
{
    par: 73,
    opcoes: [
        {numero: 145, descricao_pergunta: "Pesquisar a tradução dos hieróglifos escritos por egípcios na Antiguidade."},
        {numero: 146, descricao_pergunta: "Ler sobre instalações hidrossanitárias em projetos arquitetônicos."}
    ] 
},
{
    par: 74,
    opcoes: [
        {numero: 147, descricao_pergunta: "Estampar camisetas com técnicas modernas."},
        {numero: 148, descricao_pergunta: "Acompanhar os projetos de lei sobre questões raciais."}
    ] 
},
{
    par: 75,
    opcoes: [
        {numero: 149, descricao_pergunta: "Pesquisar sobre como reduzir o teor de gordura no processamento de sorvetes."},
        {numero: 150, descricao_pergunta: "Ler sobre os efeitos dos agrotóxicos na saúde do ser humano."}
    ] 
},
{
    par: 76,
    opcoes: [
        {numero: 151, descricao_pergunta: "Avaliar o nível de raiva em motoristas."},
        {numero: 152, descricao_pergunta: "Ouvir comentaristas sobre crítica de cinema."}
    ] 
},
{
    par: 77,
    opcoes: [
        {numero: 153, descricao_pergunta: "Propor melhorias na administração penitenciária."},
        {numero: 154, descricao_pergunta: "Ler um artigo sobre o tratamento da depressão."}
    ] 
},
{
    par: 78,
    opcoes: [
        {numero: 155, descricao_pergunta: "Acompanhar perícia social em denúncia de maus-tratos."},
        {numero: 156, descricao_pergunta: "Estudar o processo de transformação do lixo em combustível."}
    ] 
},
{
    par: 79,
    opcoes: [
        {numero: 157, descricao_pergunta: "Trabalhar na restauração de livros antigos."},
        {numero: 158, descricao_pergunta: "Aprender um método de arquivo de documentos."}
    ] 
},
{
    par: 80,
    opcoes: [
        {numero: 159, descricao_pergunta: "Acompanhar as descobertas sobre as cadeias de DNA."},
        {numero: 160, descricao_pergunta: "Ajudar no tratamento de uma pessoa com medo de subir de elevador."}
    ] 
},
{
    par: 81,
    opcoes: [
        {numero: 161, descricao_pergunta: "Planejar a divulgação de uma nova marca de roupas."},
        {numero: 162, descricao_pergunta: "Solucionar a logística de distribuição de mercadorias em lojas no interior."}
    ] 
},
{
    par: 82,
    opcoes: [
        {numero: 163, descricao_pergunta: "Conhecer os riscos do uso de alguns produtos químicos na fabricação de perfumes."},
        {numero: 164, descricao_pergunta: "Desenhar novos modelos de coleiras de cachorro."}
    ] 
},
{
    par: 83,
    opcoes: [
        {numero: 165, descricao_pergunta: "Remarcar preços levando em conta a inflação."},
        {numero: 166, descricao_pergunta: "Estabelecer normas éticas para as eleições."}
    ] 
},
{
    par: 84,
    opcoes: [
        {numero: 167, descricao_pergunta: "Conhecer os sistemas de robótica em uma indústria automotiva."},
        {numero: 168, descricao_pergunta: "Orientar alunos em suas dificuldades de aprendizagem."}
    ] 
},
{
    par: 85,
    opcoes: [
        {numero: 169, descricao_pergunta: "Fazer experiências em animais para testar medicamentos."},
        {numero: 170, descricao_pergunta: "Pesquisar a fórmula de um novo filtro solar."}
    ] 
},
{
    par: 86,
    opcoes: [
        {numero: 171, descricao_pergunta: "Calcular os custos para renovar a pintura de uma casa."},
        {numero: 172, descricao_pergunta: "Pesquisar os tipos de alergia provocada por animais."}
    ] 
},
{
    par: 87,
    opcoes: [
        {numero: 173, descricao_pergunta: "Defender suas ideias religiosas."},
        {numero: 174, descricao_pergunta: "Escrever uma obra sobre curiosidades."}
    ] 
},
{
    par: 88,
    opcoes: [
        {numero: 175, descricao_pergunta: "Orientar famílias no relacionamento com filhos deficientes."},
        {numero: 176, descricao_pergunta: "Confeccionar brinquedos em tecido e madeira."}
    ] 
},
{
    par: 89,
    opcoes: [
        {numero: 177, descricao_pergunta: "Acompanhar a adaptação de crianças adotadas."},
        {numero: 178, descricao_pergunta: "Calcular custos de entrega de compras pela Internet."}
    ] 
},
{
    par: 90,
    opcoes: [
        {numero: 179, descricao_pergunta: "Familiarizar-se com a linguagem de programação de computadores."},
        {numero: 180, descricao_pergunta: "Organizar o roteiro, transporte e estadia de uma excursão."}
    ] 
},
{
    par: 91,
    opcoes: [
        {numero: 181, descricao_pergunta: "Aprender a tocar instrumentos musicais."},
        {numero: 182, descricao_pergunta: "Aplicar testes para avaliar níveis de memória em idosos."}
    ] 
},
{
    par: 92,
    opcoes: [
        {numero: 183, descricao_pergunta: "Convidar pessoas importantes para a inauguração de um grande hotel."},
        {numero: 184, descricao_pergunta: "Levantar dados populacionais consultando pesquisas do IBGE."}
    ] 
},
{
    par: 93,
    opcoes: [
        {numero: 185, descricao_pergunta: "Ler sobre as últimas descobertas dos efeitos da radioatividade."},
        {numero: 186, descricao_pergunta: "Aprender técnicas para convencer pessoas a comprar produtos."}
    ] 
},
{
    par: 94,
    opcoes: [
        {numero: 187, descricao_pergunta: "Conhecer substâncias químicas que causam dependência."},
        {numero: 188, descricao_pergunta: "Participar de um concurso de histórias de terror."}
    ] 
},
{
    par: 95,
    opcoes: [
        {numero: 189, descricao_pergunta: "Auxiliar na elaboração de normas para o recolhimento de menores infratores."},
        {numero: 190, descricao_pergunta: "Fazer um curso sobre adestramento de cães."}
    ] 
},
{
    par: 96,
    opcoes: [
        {numero: 191, descricao_pergunta: "Assistir a uma palestra sobre publicidade e propaganda."},
        {numero: 192, descricao_pergunta: "Desenhar novos modelos de automóveis."}
    ] 
},
{
    par: 97,
    opcoes: [
        {numero: 193, descricao_pergunta: "Fazer um curso de redação."},
        {numero: 194, descricao_pergunta: "Ler sobre a interpretação dos sonhos."}
    ] 
},
{
    par: 98,
    opcoes: [
        {numero: 195, descricao_pergunta: "Pesquisar combustíveis para diminuir a poluição do ar."},
        {numero: 196, descricao_pergunta: "Calcular o custo de vida em diferentes cidades."}
    ] 
},
{
    par: 99,
    opcoes: [
        {numero: 197, descricao_pergunta: "Realizar um vídeo para promover a venda de apartamentos."},
        {numero: 198, descricao_pergunta: "Orientar adolescentes na prevenção de gravidez."}
    ] 
},
{
    par: 100,
    opcoes: [
        {numero: 199, descricao_pergunta: "Conhecer o processo industrial de fabricação da cerveja."},
        {numero: 200, descricao_pergunta: "Participar da elaboração de normas de convivência em um condomínio."}
    ] 
}
];

export default perguntasQuestionario;
const questions = [
    {
        id: 1,
        question: "Qual é a cor do semáforo que indica que os condutores devem parar?",
        answer: "Vermelho",
    },
    {
        id: 2,
        question: "Qual é a cor do semáforo que indica que os condutores podem prosseguir?",
        answer: "Verde",
    },
    {
        id: 3,
        question: "Qual é a cor do semáforo que indica que os condutores devem reduzir a velocidade?",
        answer: "Amarelo",
    },
    {
        id: 4,
        question: "O que significa uma placa de trânsito com a letra 'P' em um círculo azul?",
        answer: "Estacionamento permitido",
    },
    {
        id: 5,
        question: "Qual é a velocidade máxima permitida em uma via urbana, fora das áreas sinalizadas?",
        answer: "60 km/h",
    },
    {
        id: 6,
        question: "O que significa uma placa de trânsito com a letra 'R' em um círculo vermelho?",
        answer: "Proibido estacionar",
    },
    {
        id: 7,
        question: "O que significa uma placa de trânsito com a letra 'A' em um círculo vermelho?",
        answer: "Proibido ultrapassar",
    },
    {
        id: 8,
        question: "Qual é o órgão responsável pela fiscalização do trânsito nas rodovias federais brasileiras?",
        answer: "Polícia Rodoviária Federal (PRF)",
    },
    {
        id: 9,
        question: "Qual é o órgão responsável pela fiscalização do trânsito nas vias urbanas brasileiras?",
        answer: "Órgãos municipais de trânsito",
    },
    {
        id: 10,
        question: "O que significa uma placa de trânsito com a palavra 'PARE' em vermelho?",
        answer: "Obriga os condutores a pararem antes de prosseguir",
    },
    {
        id: 11,
        question: "O que significa uma placa de trânsito com a palavra 'DEVAGAR' em amarelo?",
        answer: "Indica aos condutores que reduzam a velocidade",
    },
    {
        id: 12,
        question: "Quais são as cores da faixa de pedestres?",
        answer: "Branco e preto",
    },
    {
        id: 13,
        question: "Quais são as cores da faixa de pedestres de travessia elevada?",
        answer: "Branco e amarelo",
    },
    {
        id: 14,
        question: "Qual é a documentação obrigatória para conduzir um veículo no Brasil?",
        answer: "Carteira Nacional de Habilitação (CNH)",
    },
    {
        id: 15,
        question: "Qual é a idade mínima para obter a CNH na categoria 'B'?",
        answer: "18 anos",
    },
    {
        id: 16,
        question: "O que significa uma placa de trânsito com o símbolo de uma câmera?",
        answer: "Indica que há fiscalização eletrônica no local",
    },
    {
        id: 17,
        question: "O que significa uma placa de trânsito com a palavra 'CONSERVE' em azul?",
        answer: "Indica aos condutores que conservem a natureza e o meio ambiente",
    },
    {
        id: 18,
        question: "Quais são os documentos obrigatórios de um veículo no Brasil?",
        answer: "Certificado de Registro e Licenciamento de Veículo (CRLV) e Seguro Obrigatório (DPVAT)",
    },
    {
        id: 19,
        question: "Qual é a velocidade máxima permitida em rodovias federais?",
        answer: "Varia de acordo com a via e o tipo de veículo",
    },
    {
        id: 20,
        question: "O que significa uma placa de trânsito com a letra 'E' em um círculo vermelho?",
        answer: "Proibido estacionar em qualquer horário",
    },
    {
        id: 21,
        question: "Qual é a punição para quem é pego dirigindo embriagado?",
        answer: "Multas, suspensão do direito de dirigir e até mesmo a prisão",
    },
    {
        id: 22,
        question: "Quais são as penalidades para quem comete infrações de trânsito?",
        answer: "Multas, pontos na CNH, suspensão do direito de dirigir e apreensão do veículo",
    },
    {
        id: 23,
        question: "O que significa uma placa de trânsito com a palavra 'ATENÇÃO' em amarelo?",
        answer: "Indica aos condutores que fiquem atentos às condições da via",
    },
    {
        id: 24,
        question: "Quais são as principais causas de acidentes de trânsito no Brasil?",
        answer: "Excesso de velocidade, embriaguez ao volante, falta de atenção e desrespeito às leis de trânsito",
    },
    {
        id: 25,
        question: "O que significa uma placa de trânsito com a palavra 'PARADA OBRIGATÓRIA' em vermelho?",
        answer: "Obriga os condutores a pararem completamente",
    },
    {
        id: 26,
        question: "Qual é a idade mínima para uma criança ser transportada no banco dianteiro de um veículo?",
        answer: "10 anos",
    },
    {
        id: 27,
        question: "O que significa uma placa de trânsito com o desenho de uma criança?",
        answer: "Indica a proximidade de uma área escolar",
    },
    {
        id: 28,
        question: "O que significa uma placa de trânsito com a palavra 'PROIBIDO' em vermelho?",
        answer: "Indica a proibição de determinada ação ou circulação",
    },
    {
        id: 29,
        question: "Qual é a idade mínima para uma criança ser transportada no banco traseiro de um veículo com segurança?",
        answer: "7 anos",
    },
    {
        id: 30,
        question: "Qual é a cor da placa de trânsito que indica 'PARE'?",
        answer: "Vermelha com letras brancas",
    },
    {
        id: 31,
        question: "O que significa uma placa de trânsito com a palavra 'DEVAGAR' em vermelho?",
        answer: "Indica aos condutores que reduzam a velocidade",
    },
    {
        id: 32,
        question: "Quais são as cores da placa de regulamentação de velocidade máxima?",
        answer: "Branco com bordas vermelhas e números pretos",
    },
    {
        id: 33,
        question: "O que significa uma placa de trânsito com a palavra 'SINALIZAÇÃO' em azul?",
        answer: "Indica que se aproxima uma área com sinalização especial",
    },
    {
        id: 34,
        question: "Qual é o significado da sinalização de 'PARE E SIGA'?",
        answer: "Indica que o tráfego em uma via está interrompido alternadamente",
    },
    {
        id: 35,
        question: "O que significa uma placa de trânsito com a palavra 'PROIBIDO' em vermelho sobre fundo branco?",
        answer: "Indica a proibição de determinada ação ou circulação",
    },
    {
        id: 36,
        question: "Qual é a cor da placa de trânsito que indica 'DEVAGAR'?",
        answer: "Amarela com letras pretas",
    },
    {
        id: 37,
        question: "O que significa uma placa de trânsito com a palavra 'CUIDADO' em amarelo?",
        answer: "Alerta os condutores para terem cuidado na via",
    },
    {
        id: 38,
        question: "Quais são os tipos de infrações de trânsito mais comuns no Brasil?",
        answer: "Excesso de velocidade, estacionamento irregular, ultrapassagem indevida, não uso do cinto de segurança e dirigir sob efeito de álcool",
    },
    {
        id: 39,
        question: "O que significa uma placa de trânsito com o desenho de uma bicicleta?",
        answer: "Indica a presença de uma ciclovia ou ciclofaixa",
    },
    {
        id: 40,
        question: "Qual é a cor da placa de trânsito que indica 'PROIBIDO'?",
        answer: "Branca com bordas vermelhas e letras ou símbolos em preto",
    },
    {
        id: 41,
        question: "O que significa uma placa de trânsito com a palavra 'RETORNO' em branco sobre fundo verde?",
        answer: "Indica que é permitido fazer retorno naquela via",
    },
    {
        id: 42,
        question: "Quais são as principais medidas de segurança no trânsito?",
        answer: "Uso do cinto de segurança, respeito às leis de trânsito, não dirigir sob efeito de álcool, respeitar os limites de velocidade e utilizar dispositivos de segurança para crianças",
    },
    {
        id: 43,
        question: "O que significa uma placa de trânsito com o desenho de uma ambulância?",
        answer: "Indica a proximidade de um hospital ou serviço de emergência",
    },
    {
        id: 44,
        question: "O que significa uma placa de trânsito com a palavra 'DESVIO' em amarelo?",
        answer: "Indica um desvio temporário na via",
    },
    {
        id: 45,
        question: "Qual é a cor da placa de trânsito que indica 'ESTACIONAMENTO PROIBIDO'?",
        answer: "Branca com bordas vermelhas e símbolo de um 'E' em preto",
    },
    {
        id: 46,
        question: "O que significa uma placa de trânsito com a palavra 'PERIGO' em vermelho?",
        answer: "Indica uma situação perigosa ou de risco na via",
    },
    {
        id: 47,
        question: "Quais são as cores da placa de sinalização de parada de ônibus?",
        answer: "Branco com bordas verdes e símbolo de um ônibus em preto",
    },
    {
        id: 48,
        question: "O que significa uma placa de trânsito com a palavra 'SEMAFORO' em branco sobre fundo preto?",
        answer: "Indica a proximidade de um semáforo",
    },
    {
        id: 49,
        question: "Qual é a cor da placa de trânsito que indica 'ATENÇÃO'?",
        answer: "Amarela com letras pretas",
    },
    {
        id: 50,
        question: "O que significa uma placa de trânsito com o desenho de uma mão apontando para baixo?",
        answer: "Indica que é proibido fazer conversão naquela via",
    },
];

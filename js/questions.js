const questions = [
    {
        id: 1,
        question: "Qual é o limite de velocidade em áreas urbanas?",
        answer: "60 km/h.",
        answerImage: "R-19-60.png",
    },
    {
        id: 2,
        question: "O que significa a sigla CNH?",
        answer: "Carteira Nacional de Habilitação.",
        answerImage: "cnh.png",
    },
    {
        id: 3,
        question: "Qual é a cor do semáforo que indica 'atenção'?",
        answer: "Amarelo.",
        answerImage: "traffic_light_yellow.jpg",
    },
    {
        id: 4,
        question: "O que significa a sigla AMC?",
        answer: "Autarquia Municipal de Trânsito.",
        answerImage: "amc.png",
    },
    {
        id: 5,
        question: "Qual é o órgão responsável pela fiscalização do trânsito?",
        answer: "Departamento Estadual de Trânsito (Detran).",
        answerImage: "detran_ce.png",
    },
    {
        id: 6,
        question: "Qual é a cor do semáforo que indica 'pare'?",
        answer: "Vermelho.",
        answerImage: "traffic_light_red.jpg",
    },
    {
        id: 7,
        question: "O que significa a sigla DPVAT?",
        answer: "Danos Pessoais Causados por Veículos Automotores de Via Terrestre.",
        answerImage: "dpvat.jpg",
    },
    {
        id: 8,
        question: "O que significa a sigla CTB?",
        answer: "Código de Trânsito Brasileiro.",
    },
    {
        id: 9,
        question: "O que é uma rotatória?",
        answer: "Uma interseção circular de vias.",
        answerImage: "R-33.png",
    },
    {
        id: 10,
        question: "Qual é a idade mínima para conduzir uma bicicleta no trânsito?",
        answer: "10 anos.",
    },
    {
        id: 11,
        question: "Qual é o significado do sinal de trânsito triangular?",
        answer: "Dê preferência.",
        questionImage: "R-2.png"
    },
    {
        id: 12,
        question: "O que significa a sigla ANTT?",
        answer: "Agência Nacional de Transportes Terrestres.",
        questionImage: "antt.png"
    },
    {
        id: 13,
        question: "O que é uma faixa de pedestres?",
        answer: "Espaço demarcado para a travessia segura de pedestres.",
        questionImage: "A-32.png"
    },
    {
        id: 14,
        question: "O que significa a sigla PRF?",
        answer: "Polícia Rodoviária Federal.",
        questionImage: "prf.png"
    },
    {
        id: 15,
        question: "Qual é o limite de álcool no sangue permitido para motoristas?",
        answer: "0,06%.",
        questionImage: "alcohool.png"
    },
    {
        id: 16,
        question: "O que é um radar de trânsito?",
        answer: "Um dispositivo eletrônico para monitorar a velocidade dos veículos.",
        questionImage: "radar.png"
    },
    {
        id: 17,
        question: "O que significa a sigla DENATRAN?",
        answer: "Departamento Nacional de Trânsito.",
        questionImage: "denatran.png"
    },
    {
        id: 18,
        question: "Qual é o sinal de trânsito que indica 'pare'?",
        answer: "Um octógono vermelho.",
        questionImage: "R-1.png"
    },
    {
        id: 19,
        question: "O que é elevação na pista para reduzir a velocidade dos veículos?",
        answer: "Uma saliência ou lombada.",
        questionImage: "A-18.png"
    },
    {
        id: 20,
        question: "Qual é a cor do semáforo que indica 'siga'?",
        answer: "Verde.",
        answerImage: "traffic_light_green.jpg",
    },
    {
        id: 21,
        question: "O que é uma via que o tráfego flui em apenas uma direção.",
        answer: "É uma via de sentido único.",
        answerImage: "R-24a.png",
    },
    {
        id: 22,
        question: "O que é uma via exclusiva para o tráfego de bicicletas?",
        answer: "É uma ciclovia.",
        answerImage: "A-30b.png",
    },
    {
        id: 23,
        question: "O que significa a sigla CETTRANS?",
        answer: "Companhia de Engenharia de Transporte e Trânsito.",
    },
    {
        id: 24,
        question: "O que significa uma placa de redonda com um 'E' cortado",
        answer: "Estacionamento proibido.",
        answerImage: "R-6a.png",
    },
    {
        id: 25,
        question: "O que é um cinto de segurança?",
        answer: "Um dispositivo para proteger os ocupantes de um veículo em caso de acidente.",
        questionImage: "E-1.png",
    },
    {
        id: 26,
        question: "O que significa a sigla DUT?",
        answer: "Documento Único de Transferência.",
    },
    {
        id: 27,
        question: "Qual é a distância mínima que se deve manter de um ciclista ao ultrapassar?",
        answer: "1,5 metros.",
        questionImage: "distancia_ciclista.png",
    },
    {
        id: 28,
        question: "Placa que proíbe conversão à esquerda",
        answer: "Proibido virar à esquerda.",
        questionImage: "R-4a.png",
    },
    {
        id: 29,
        question: "O que significa a sigla CONTRAN?",
        answer: "Conselho Nacional de Trânsito.",
        questionImage: "contran.jpeg",
    },
    {
        id: 30,
        question: "Qual é a punição por estacionar em vagas para pessoas com deficiência?",
        answer: "Multa e remoção do veículo.",
        questionImage: "deficiente.jpeg",
    },
    {
        id: 31,
        question: "Qual é o limite de velocidade em áreas escolares?",
        answer: "30 km/h.",
        questionImage: "R-19-30.png",
    },
    {
        id: 32,
        question: "O que significam as placas de advertência?",
        answer: "Alerta sobre algum perigo à frente.",
        questionImage: "A-0.png",
    },
    {
        id: 33,
        question: "Qual é o significado de 'CRLV'?",
        answer: "Certificado de Registro e Licenciamento de Veículo.",
    },
    {
        id: 34,
        question: "Placa que proíbe a circulação de veículos?",
        answer: "Proibido trânsito de automóveis",
        questionImage: "R-10.png",
    },
    {
        id: 35,
        question: "O que é um engarrafamento?",
        answer: "Congestionamento de veículos em uma via.",
    },
    {
        id: 36,
        question: "Qual é o limite de velocidade em vias de trânsito rápido?",
        answer: "80 km/h.",
        questionImage: "R-19-80.png",
    },
    {
        id: 37,
        question: "Qual é a idade mínima para obter a CNH?",
        answer: "18 anos.",
    },
    {
        id: 38,
        question: "O que significa a sigla IPVA?",
        answer: "Imposto sobre a Propriedade de Veículos Automotores.",
    },
    {
        id: 39,
        question: "O que é uma faixa exclusiva de ônibus?",
        answer: "Uma faixa reservada para a circulação exclusiva de ônibus.",
        questionImage: "R-32.png",
    },
    {
        id: 40,
        question: "O que significa a sigla DSV?",
        answer: "Departamento de Operação do Sistema Viário.",
    },
    {
        id: 41,
        question: "Qual é o significado do sinal de trânsito circular com uma faixa diagonal?",
        answer: "Proibido estacionar.",
    },
    {
        id: 42,
        question: "O que é uma motocicleta?",
        answer: "Um veículo de duas rodas com motor.",
    },
    {
        id: 43,
        question: "O que significa a sigla SETRAN?",
        answer: "Secretaria de Trânsito.",
    },
    {
        id: 44,
        question: "Qual é a distância mínima que se deve manter do veículo da frente?",
        answer: "3 segundos.",
    },
    {
        id: 45,
        question: "O que é uma autoescola?",
        answer: "Uma escola de ensino de direção veicular.",
    },
    {
        id: 46,
        question: "O que significa a sigla DNER?",
        answer: "Departamento Nacional de Estradas de Rodagem.",
    },
    {
        id: 47,
        question: "Qual é o significado do sinal de trânsito retangular com uma faixa horizontal?",
        answer: "Proibido ultrapassar.",
    },
    {
        id: 48,
        question: "O que é uma via de mão única?",
        answer: "Uma via em que o tráfego flui em apenas uma direção.",
    },
    {
        id: 49,
        question: "O que significa a sigla SMT?",
        answer: "Secretaria Municipal de Trânsito.",
    },
    {
        id: 50,
        question: "O que é um motorista habilitado?",
        answer: "Um condutor que possui CNH válida.",
    },
]
const questions = [
    {
        id: 1,
        question: "Qual é o limite de velocidade em áreas urbanas?",
        answer: "60 km/h.",
    },
    {
        id: 2,
        question: "O que significa a sigla CNH?",
        answer: "Carteira Nacional de Habilitação.",
    },
    {
        id: 3,
        question: "Qual é a cor do semáforo que indica 'atenção'?",
        answer: "Amarelo.",
    },
    {
        id: 4,
        question: "O que significa a sigla CET?",
        answer: "Companhia de Engenharia de Tráfego.",
    },
    {
        id: 5,
        question: "Qual é o órgão responsável pela fiscalização do trânsito?",
        answer: "Departamento de Trânsito (Detran).",
    },
    {
        id: 6,
        question: "Qual é o documento obrigatório para dirigir um veículo?",
        answer: "CNH.",
    },
    {
        id: 7,
        question: "O que significa a sigla DPVAT?",
        answer: "Danos Pessoais Causados por Veículos Automotores de Via Terrestre.",
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
    },
    {
        id: 10,
        question: "Qual é a idade mínima para conduzir uma bicicleta no trânsito?",
        answer: "10 anos.",
    },
    {
        id: 11,
        question: "Qual é o significado do sinal de trânsito triangular?",
        answer: "Atenção.",
    },
    {
        id: 12,
        question: "O que significa a sigla ANTT?",
        answer: "Agência Nacional de Transportes Terrestres.",
    },
    {
        id: 13,
        question: "O que é uma faixa de pedestres?",
        answer: "Espaço demarcado para a travessia segura de pedestres.",
    },
    {
        id: 14,
        question: "O que significa a sigla PRF?",
        answer: "Polícia Rodoviária Federal.",
    },
    {
        id: 15,
        question: "Qual é o limite de álcool no sangue permitido para motoristas?",
        answer: "0,05%.",
    },
    {
        id: 16,
        question: "O que é um radar de trânsito?",
        answer: "Um dispositivo eletrônico para monitorar a velocidade dos veículos.",
    },
    {
        id: 17,
        question: "O que significa a sigla DENATRAN?",
        answer: "Departamento Nacional de Trânsito.",
    },
    {
        id: 18,
        question: "Qual é o sinal de trânsito que indica 'pare'?",
        answer: "Um octógono vermelho.",
    },
    {
        id: 19,
        question: "O que é uma lombada?",
        answer: "Uma elevação na pista para reduzir a velocidade dos veículos.",
    },
    {
        id: 20,
        question: "O que significa a sigla SAMU?",
        answer: "Serviço de Atendimento Móvel de Urgência.",
    },
    {
        id: 21,
        question: "Qual é o número de emergência para chamar a polícia no trânsito?",
        answer: "190.",
    },
    {
        id: 22,
        question: "O que é uma bicicleta elétrica?",
        answer: "Uma bicicleta com motor elétrico para auxiliar o pedal.",
    },
    {
        id: 23,
        question: "O que significa a sigla CETTRANS?",
        answer: "Companhia de Engenharia de Transporte e Trânsito.",
    },
    {
        id: 24,
        question: "Qual é o significado do sinal de trânsito quadrado?",
        answer: "Regulamentação.",
    },
    {
        id: 25,
        question: "O que é um cinto de segurança?",
        answer: "Um dispositivo para proteger os ocupantes de um veículo em caso de acidente.",
    },
    {
        id: 26,
        question: "O que significa a sigla DUT?",
        answer: "Documento Único de Transferência.",
    },
    {
        id: 27,
        question: "Qual é a velocidade máxima permitida em rodovias federais?",
        answer: "110 km/h.",
    },
    {
        id: 28,
        question: "O que é uma ciclovia?",
        answer: "Uma via exclusiva para o tráfego de bicicletas.",
    },
    {
        id: 29,
        question: "O que significa a sigla CONTRAN?",
        answer: "Conselho Nacional de Trânsito.",
    },
    {
        id: 30,
        question: "Qual é o significado do sinal de trânsito retangular?",
        answer: "Indicação.",
    },
    {
        id: 31,
        question: "O que é um quebra-molas?",
        answer: "Uma elevação na pista para reduzir a velocidade dos veículos.",
    },
    {
        id: 32,
        question: "O que significa a sigla DER?",
        answer: "Departamento de Estradas de Rodagem.",
    },
    {
        id: 33,
        question: "Qual é o documento obrigatório para circular com um veículo?",
        answer: "CRLV.",
    },
    {
        id: 34,
        question: "O que significa a sigla CETET?",
        answer: "Companhia de Engenharia de Trânsito e Transporte.",
    },
    {
        id: 35,
        question: "O que é um engarrafamento?",
        answer: "Congestionamento de veículos em uma via.",
    },
    {
        id: 36,
        question: "O que significa a sigla EPTC?",
        answer: "Empresa Pública de Transporte e Circulação.",
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
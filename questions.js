// Este arquivo contém nosso banco de dados de perguntas para o quiz.
// A estrutura foi atualizada para incluir um array 'hints' com 3 dicas para a ajuda "Cartas".
// hints[0] = Dica Básica, hints[1] = Dica Média, hints[2] = Dica Decisiva

const questions = [
    // --- CIÊNCIA ---
    {
        category: "Ciência",
        question: "Qual é o planeta mais próximo do Sol?",
        answers: [
            { text: "Vênus", correct: false },
            { text: "Terra", correct: false },
            { text: "Mercúrio", correct: true },
            { text: "Marte", correct: false }
        ],
        score: 100,
        hints: [
            "Não é o planeta que tem o nome de uma deusa romana da beleza.",
            "É o menor planeta do nosso sistema solar.",
            "Seu nome é o mesmo do mensageiro dos deuses na mitologia romana."
        ]
    },
    {
        category: "Ciência",
        question: "Qual é o símbolo químico para o ouro?",
        answers: [
            { text: "Ag", correct: false },
            { text: "Au", correct: true },
            { text: "O", correct: false },
            { text: "Fe", correct: false }
        ],
        score: 150,
        hints: [
            "O símbolo vem do latim.",
            "A palavra em latim para ouro é 'aurum'.",
            "Pense no brilho dourado da 'aurora'."
        ]
    },
    {
        category: "Ciência",
        question: "Quantos ossos tem um corpo humano adulto?",
        answers: [
            { text: "206", correct: true },
            { text: "212", correct: false },
            { text: "198", correct: false },
            { text: "300", correct: false }
        ],
        score: 200,
        hints: [
            "É um número maior que 200.",
            "Bebês nascem com mais ossos, que se fundem com o tempo.",
            "O número termina com o algarismo 6."
        ]
    },
    {
        category: "Ciência",
        question: "Qual processo as plantas usam para converter luz em energia?",
        answers: [
            { text: "Respiração", correct: false },
            { text: "Transpiração", correct: false },
            { text: "Fotossíntese", correct: true },
            { text: "Osmose", correct: false }
        ],
        score: 100,
        hints: [
            "A palavra vem do grego e envolve 'luz' e 'criar'.",
            "É o motivo pelo qual as plantas são verdes (clorofila).",
            "'Foto' significa luz. 'Síntese' significa combinação."
        ]
    },
    {
        category: "Ciência",
        question: "Qual é o maior planeta do nosso sistema solar?",
        answers: [
            { text: "Saturno", correct: false },
            { text: "Júpiter", correct: true },
            { text: "Netuno", correct: false },
            { text: "Urano", correct: false }
        ],
        score: 150,
        hints: [
            "É um gigante gasoso.",
            "Possui uma famosa 'Grande Mancha Vermelha'.",
            "Seu nome é o do rei dos deuses romanos."
        ]
    },
    {
        category: "Ciência",
        question: "A que velocidade a luz viaja no vácuo?",
        answers: [
            { text: "300.000 km/h", correct: false },
            { text: "150.000 km/s", correct: false },
            { text: "300.000 km/s", correct: true },
            { text: "3.000.000 km/s", correct: false }
        ],
        score: 250,
        hints: [
            "A unidade de medida é quilômetros por segundo.",
            "É o limite de velocidade universal.",
            "O número começa com 3 e tem cinco zeros."
        ]
    },
    {
        category: "Ciência",
        question: "Qual gás é mais abundante na atmosfera da Terra?",
        answers: [
            { text: "Oxigênio", correct: false },
            { text: "Nitrogênio", correct: true },
            { text: "Dióxido de Carbono", correct: false },
            { text: "Argônio", correct: false }
        ],
        score: 150,
        hints: [
            "Compõe cerca de 78% da atmosfera.",
            "Seu símbolo químico é N.",
            "É essencial para o crescimento das plantas."
        ]
    },
    {
        category: "Ciência",
        question: "O que é H2O?",
        answers: [
            { text: "Sal", correct: false },
            { text: "Açúcar", correct: false },
            { text: "Água", correct: true },
            { text: "Óleo", correct: false }
        ],
        score: 50,
        hints: [
            "É essencial para a vida.",
            "Cobre a maior parte da superfície da Terra.",
            "A fórmula indica dois átomos de hidrogênio e um de oxigênio."
        ]
    },
    {
        category: "Ciência",
        question: "Qual é o nome da galáxia em que vivemos?",
        answers: [
            { text: "Andrômeda", correct: false },
            { text: "Galáxia do Triângulo", correct: false },
            { text: "Via Láctea", correct: true },
            { text: "Galáxia do Sombreiro", correct: false }
        ],
        score: 100,
        hints: [
            "Seu nome remete a um caminho esbranquiçado no céu.",
            "É uma galáxia espiral.",
            "O nome em latim significa 'caminho de leite'."
        ]
    },
    {
        category: "Ciência",
        question: "Quem desenvolveu a teoria da relatividade?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Galileu Galilei", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Nikola Tesla", correct: false }
        ],
        score: 200,
        hints: [
            "Ele é famoso pela equação E=mc².",
            "Nasceu na Alemanha.",
            "Seu sobrenome é sinônimo de 'gênio'."
        ]
    },

    // --- HISTÓRIA ---
    {
        category: "História",
        question: "Quem foi o primeiro presidente do Brasil?",
        answers: [
            { text: "Getúlio Vargas", correct: false },
            { text: "Deodoro da Fonseca", correct: true },
            { text: "Prudente de Morais", correct: false },
            { text: "Dom Pedro II", correct: false }
        ],
        score: 150,
        hints: [
            "Ele era um marechal.",
            "Ele proclamou a República em 1889.",
            "Seu primeiro nome é o mesmo de um famoso bairro do Rio de Janeiro."
        ]
    },
    {
        category: "História",
        question: "Em que ano o homem pisou na Lua pela primeira vez?",
        answers: [
            { text: "1965", correct: false },
            { text: "1972", correct: false },
            { text: "1969", correct: true },
            { text: "1959", correct: false }
        ],
        score: 150,
        hints: [
            "Foi durante a Guerra Fria.",
            "A missão se chamava Apollo 11.",
            "O ano termina com o número 9."
        ]
    },
    {
        category: "História",
        question: "Qual império foi governado por Júlio César?",
        answers: [
            { text: "Império Grego", correct: false },
            { text: "Império Persa", correct: false },
            { text: "Império Romano", correct: true },
            { text: "Império Egípcio", correct: false }
        ],
        score: 150,
        hints: [
            "Sua capital era Roma.",
            "Era famoso por seus gladiadores e legiões.",
            "Júlio César foi sucedido por Augusto."
        ]
    },
    {
        category: "História",
        question: "Quem pintou a Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false }
        ],
        score: 100,
        hints: [
            "Ele também foi um grande inventor.",
            "Era italiano e um dos maiores nomes do Renascimento.",
            "Seu primeiro nome é o mesmo de uma das Tartarugas Ninja."
        ]
    },
    {
        category: "História",
        question: "Em que ano a Segunda Guerra Mundial terminou?",
        answers: [
            { text: "1942", correct: false },
            { text: "1945", correct: true },
            { text: "1950", correct: false },
            { text: "1939", correct: false }
        ],
        score: 200,
        hints: [
            "Ocorreu na década de 40.",
            "Foi o ano em que as bombas atômicas foram usadas.",
            "O ano termina com o número 5."
        ]
    },
    {
        category: "História",
        question: "Qual civilização antiga construiu Machu Picchu?",
        answers: [
            { text: "Maias", correct: false },
            { text: "Astecas", correct: false },
            { text: "Incas", correct: true },
            { text: "Egípcios", correct: false }
        ],
        score: 250,
        hints: [
            "Eles viviam na região dos Andes, na América do Sul.",
            "Sua capital era Cusco.",
            "O nome da civilização tem 4 letras."
        ]
    },
    {
        category: "História",
        question: "Quem foi a primeira mulher a voar sozinha sobre o Oceano Atlântico?",
        answers: [
            { text: "Bessie Coleman", correct: false },
            { text: "Harriet Quimby", correct: false },
            { text: "Amelia Earhart", correct: true },
            { text: "Jacqueline Cochran", correct: false }
        ],
        score: 200,
        hints: [
            "Ela era uma aviadora americana.",
            "Ela desapareceu misteriosamente no Oceano Pacífico.",
            "Seu primeiro nome é Amelia."
        ]
    },
    {
        category: "História",
        question: "A 'Guerra Fria' foi um conflito entre quais duas superpotências?",
        answers: [
            { text: "China e Japão", correct: false },
            { text: "Alemanha e Reino Unido", correct: false },
            { text: "EUA e União Soviética", correct: true },
            { text: "França e Itália", correct: false }
        ],
        score: 150,
        hints: [
            "Foi uma disputa ideológica entre capitalismo e comunismo.",
            "Um dos lados era liderado pelos Estados Unidos.",
            "O outro lado era a URSS."
        ]
    },
    {
        category: "História",
        question: "Em que ano o Muro de Berlim caiu?",
        answers: [
            { text: "1987", correct: false },
            { text: "1991", correct: false },
            { text: "1989", correct: true },
            { text: "1990", correct: false }
        ],
        score: 150,
        hints: [
            "Foi no final da década de 80.",
            "Marcou o início do fim da Guerra Fria.",
            "O ano termina com o número 9."
        ]
    },
    {
        category: "História",
        question: "Quem proclamou a Independência do Brasil?",
        answers: [
            { text: "Dom João VI", correct: false },
            { text: "Tiradentes", correct: false },
            { text: "Dom Pedro I", correct: true },
            { text: "Marechal Deodoro", correct: false }
        ],
        score: 100,
        hints: [
            "Ele era filho do rei de Portugal.",
            "O evento ocorreu às margens do rio Ipiranga.",
            "Ele se tornou o primeiro imperador do Brasil."
        ]
    },

    // --- ENTRETENIMENTO ---
    {
        category: "Entretenimento",
        question: "Qual filme ganhou o Oscar de Melhor Filme em 2020?",
        answers: [
            { text: "1917", correct: false },
            { text: "Coringa", correct: false },
            { text: "O Irlandês", correct: false },
            { text: "Parasita", correct: true }
        ],
        score: 200,
        hints: [
            "É um filme sul-coreano.",
            "Foi o primeiro filme de língua não inglesa a ganhar o prêmio principal.",
            "O título se refere a pessoas que vivem às custas de outras."
        ]
    },
    {
        category: "Entretenimento",
        question: "Quem escreveu 'Dom Quixote'?",
        answers: [
            { text: "William Shakespeare", correct: false },
            { text: "Machado de Assis", correct: false },
            { text: "Miguel de Cervantes", correct: true },
            { text: "Dante Alighieri", correct: false }
        ],
        score: 250,
        hints: [
            "O autor era espanhol.",
            "É considerado o primeiro romance moderno.",
            "O sobrenome do autor começa com 'C'."
        ]
    },
    {
        category: "Entretenimento",
        question: "Qual banda de rock é famosa pela música 'Bohemian Rhapsody'?",
        answers: [
            { text: "The Beatles", correct: false },
            { text: "Led Zeppelin", correct: false },
            { text: "Queen", correct: true },
            { text: "Pink Floyd", correct: false }
        ],
        score: 150,
        hints: [
            "O vocalista era Freddie Mercury.",
            "O nome da banda significa 'Rainha' em inglês.",
            "Outros sucessos incluem 'We Will Rock You'."
        ]
    },
    {
        category: "Entretenimento",
        question: "Qual é o nome do bruxo protagonista da série de livros de J.K. Rowling?",
        answers: [
            { text: "Ron Weasley", correct: false },
            { text: "Draco Malfoy", correct: false },
            { text: "Harry Potter", correct: true },
            { text: "Neville Longbottom", correct: false }
        ],
        score: 50,
        hints: [
            "Ele tem uma cicatriz na testa.",
            "Ele estuda em Hogwarts.",
            "O nome dele está no título dos livros."
        ]
    },
    {
        category: "Entretenimento",
        question: "Quem dirigiu a trilogia 'O Senhor dos Anéis'?",
        answers: [
            { text: "Steven Spielberg", correct: false },
            { text: "George Lucas", correct: false },
            { text: "Peter Jackson", correct: true },
            { text: "James Cameron", correct: false }
        ],
        score: 200,
        hints: [
            "Ele é da Nova Zelândia.",
            "Ele também dirigiu 'O Hobbit'.",
            "Suas iniciais são P.J."
        ]
    },
    {
        category: "Entretenimento",
        question: "Qual ator interpreta o Homem de Ferro no Universo Cinematográfico Marvel?",
        answers: [
            { text: "Chris Evans", correct: false },
            { text: "Chris Hemsworth", correct: false },
            { text: "Robert Downey Jr.", correct: true },
            { text: "Mark Ruffalo", correct: false }
        ],
        score: 100,
        hints: [
            "Ele teve uma grande volta por cima em sua carreira.",
            "Seu sobrenome é 'Júnior'.",
            "As iniciais do ator são R.D.J."
        ]
    },
    {
        category: "Entretenimento",
        question: "Qual é o nome do personagem principal da série 'Breaking Bad'?",
        answers: [
            { text: "Jesse Pinkman", correct: false },
            { text: "Saul Goodman", correct: false },
            { text: "Walter White", correct: true },
            { text: "Gus Fring", correct: false }
        ],
        score: 150,
        hints: [
            "Ele é um professor de química.",
            "Seu alter ego é 'Heisenberg'.",
            "Seu sobrenome é uma cor em inglês."
        ]
    },
    {
        category: "Entretenimento",
        question: "Qual artista é conhecido como o 'Rei do Pop'?",
        answers: [
            { text: "Elvis Presley", correct: false },
            { text: "Prince", correct: false },
            { text: "Michael Jackson", correct: true },
            { text: "James Brown", correct: false }
        ],
        score: 100,
        hints: [
            "Ele era famoso pelo passo de dança 'Moonwalk'.",
            "Fez parte do grupo 'The Jackson 5'.",
            "Seu álbum 'Thriller' é um dos mais vendidos da história."
        ]
    },
    {
        category: "Entretenimento",
        question: "Em 'Star Wars', qual é a famosa frase de Darth Vader para Luke Skywalker?",
        answers: [
            { text: "'Luke, eu sou seu pai.'", correct: false },
            { text: "'Que a Força esteja com você.'", correct: false },
            { text: "'Não. Eu sou seu pai.'", correct: true },
            { text: "'Eu te odeio!'", correct: false }
        ],
        score: 250,
        hints: [
            "É uma das citações mais famosas (e mal citadas) do cinema.",
            "É uma revelação chocante.",
            "A frase começa com uma negação."
        ]
    },
    {
        category: "Entretenimento",
        question: "Qual o nome do primeiro videogame de sucesso comercial?",
        answers: [
            { text: "Space Invaders", correct: false },
            { text: "Pac-Man", correct: false },
            { text: "Pong", correct: true },
            { text: "Donkey Kong", correct: false }
        ],
        score: 200,
        hints: [
            "Foi lançado pela Atari.",
            "Simula uma partida de tênis de mesa.",
            "O nome é uma onomatopeia do som da bola."
        ]
    },

    // --- ESPORTES ---
    {
        category: "Esportes",
        question: "Qual país sediou a Copa do Mundo de 2014?",
        answers: [
            { text: "África do Sul", correct: false },
            { text: "Alemanha", correct: false },
            { text: "Brasil", correct: true },
            { text: "Rússia", correct: false }
        ],
        score: 100,
        hints: [
            "O mascote foi um tatu-bola chamado Fuleco.",
            "O país é famoso pelo samba e pelo futebol.",
            "Você mora neste país!"
        ]
    },
    {
        category: "Esportes",
        question: "Quem é o maior medalhista olímpico de todos os tempos?",
        answers: [
            { text: "Usain Bolt", correct: false },
            { text: "Michael Phelps", correct: true },
            { text: "Larisa Latynina", correct: false },
            { text: "Carl Lewis", correct: false }
        ],
        score: 200,
        hints: [
            "Ele é um nadador americano.",
            "Ele tem 28 medalhas no total.",
            "Seu apelido é 'Tubarão de Baltimore'."
        ]
    },
    {
        category: "Esportes",
        question: "Em que esporte se utiliza um 'birdie' ou 'peteca'?",
        answers: [
            { text: "Tênis", correct: false },
            { text: "Vôlei", correct: false },
            { text: "Badminton", correct: true },
            { text: "Squash", correct: false }
        ],
        score: 100,
        hints: [
            "É jogado com raquetes.",
            "É um esporte olímpico.",
            "O nome do esporte começa com a letra 'B'."
        ]
    },
    {
        category: "Esportes",
        question: "Quantos jogadores um time de basquete tem em quadra?",
        answers: [
            { text: "5", correct: true },
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "11", correct: false }
        ],
        score: 50,
        hints: [
            "É o mesmo número de dedos em uma mão.",
            "O total de jogadores em quadra (dos dois times) é 10.",
            "É um número primo."
        ]
    },
    {
        category: "Esportes",
        question: "Qual país ganhou a primeira Copa do Mundo de Futebol?",
        answers: [
            { text: "Brasil", correct: false },
            { text: "Argentina", correct: false },
            { text: "Uruguai", correct: true },
            { text: "Itália", correct: false }
        ],
        score: 200,
        hints: [
            "O país também sediou o torneio.",
            "É um país vizinho do Brasil.",
            "Sua capital é Montevidéu."
        ]
    },
    {
        category: "Esportes",
        question: "Em que cidade foram realizados os Jogos Olímpicos de 2016?",
        answers: [
            { text: "Londres", correct: false },
            { text: "Tóquio", correct: false },
            { text: "Rio de Janeiro", correct: true },
            { text: "Pequim", correct: false }
        ],
        score: 100,
        hints: [
            "Foi a primeira vez que os jogos foram na América do Sul.",
            "A cidade é famosa pelo Cristo Redentor.",
            "É conhecida como 'Cidade Maravilhosa'."
        ]
    },
    {
        category: "Esportes",
        question: "Qual piloto de Fórmula 1 tem mais títulos mundiais?",
        answers: [
            { text: "Ayrton Senna", correct: false },
            { text: "Michael Schumacher", correct: false },
            { text: "Lewis Hamilton e Michael Schumacher", correct: true },
            { text: "Juan Manuel Fangio", correct: false }
        ],
        score: 250,
        hints: [
            "Um é alemão, o outro é britânico.",
            "Ambos conquistaram 7 títulos.",
            "Um deles correu pela Ferrari, o outro pela Mercedes."
        ]
    },
    {
        category: "Esportes",
        question: "Como é chamado um 'home run' com todas as bases ocupadas no beisebol?",
        answers: [
            { text: "Super Slam", correct: false },
            { text: "Mega Run", correct: false },
            { text: "Grand Slam", correct: true },
            { text: "Full House", correct: false }
        ],
        score: 200,
        hints: [
            "O termo também é usado no tênis.",
            "Marca 4 pontos de uma só vez.",
            "Começa com 'Grand'."
        ]
    },
    {
        category: "Esportes",
        question: "Qual é o nome do famoso torneio de tênis realizado em Londres?",
        answers: [
            { text: "Roland Garros", correct: false },
            { text: "US Open", correct: false },
            { text: "Wimbledon", correct: true },
            { text: "Australian Open", correct: false }
        ],
        score: 150,
        hints: [
            "É o único Grand Slam jogado na grama.",
            "Os jogadores devem vestir branco.",
            "É o torneio de tênis mais antigo do mundo."
        ]
    },
    {
        category: "Esportes",
        question: "Quem é considerado o maior jogador de basquete de todos os tempos?",
        answers: [
            { text: "LeBron James", correct: false },
            { text: "Kobe Bryant", correct: false },
            { text: "Michael Jordan", correct: true },
            { text: "Kareem Abdul-Jabbar", correct: false }
        ],
        score: 100,
        hints: [
            "Jogou pelo Chicago Bulls.",
            "Seu número era o 23.",
            "Ele tem sua própria marca de tênis."
        ]
    },

    // --- CONHECIMENTOS GERAIS E GEOGRAFIA ---
    {
        category: "Conhecimentos Gerais",
        question: "Quantos estados tem o Brasil?",
        answers: [
            { text: "25 e o Distrito Federal", correct: false },
            { text: "26 e o Distrito Federal", correct: true },
            { text: "27 e o Distrito Federal", correct: false },
            { text: "24 e o Distrito Federal", correct: false }
        ],
        score: 50,
        hints: [
            "O número de estados é par.",
            "É o mesmo número de letras do alfabeto.",
            "Incluindo o DF, são 27 unidades federativas."
        ]
    },
    {
        category: "Conhecimentos Gerais",
        question: "Qual é a capital da Austrália?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Perth", correct: false }
        ],
        score: 150,
        hints: [
            "Não é a cidade mais famosa do país.",
            "O nome da cidade é de origem aborígene.",
            "Começa com a letra 'C'."
        ]
    },
    {
        category: "Conhecimentos Gerais",
        question: "Qual é o maior oceano da Terra?",
        answers: [
            { text: "Atlântico", correct: false },
            { text: "Índico", correct: false },
            { text: "Pacífico", correct: true },
            { text: "Ártico", correct: false }
        ],
        score: 50,
        hints: [
            "Banha a costa oeste das Américas.",
            "Seu nome remete à 'paz'.",
            "É o maior e mais profundo."
        ]
    },
    {
        category: "Conhecimentos Gerais",
        question: "Qual é a montanha mais alta do mundo?",
        answers: [
            { text: "K2", correct: false },
            { text: "Kangchenjunga", correct: false },
            { text: "Monte Everest", correct: true },
            { text: "Lhotse", correct: false }
        ],
        score: 150,
        hints: [
            "Fica na cordilheira do Himalaia.",
            "Está na fronteira entre o Nepal e a China.",
            "Seu nome é Everest."
        ]
    },
    {
        category: "Geografia",
        question: "Qual é o rio mais longo do mundo?",
        answers: [
            { text: "Rio Nilo", correct: false },
            { text: "Rio Yangtze", correct: false },
            { text: "Rio Amazonas", correct: true },
            { text: "Rio Mississippi", correct: false }
        ],
        score: 200,
        hints: [
            "Fica na América do Sul.",
            "Sua nascente fica no Peru.",
            "Atravessa a maior floresta tropical do mundo."
        ]
    },
    {
        category: "Geografia",
        question: "Qual é a capital do Japão?",
        answers: [
            { text: "Quioto", correct: false },
            { text: "Osaka", correct: false },
            { text: "Tóquio", correct: true },
            { text: "Hiroshima", correct: false }
        ],
        score: 100,
        hints: [
            "É uma das cidades mais populosas do mundo.",
            "Sediou as Olimpíadas de 2020 (realizadas em 2021).",
            "Seu nome significa 'Capital Oriental'."
        ]
    },
    {
        category: "Geografia",
        question: "Em que continente fica o Deserto do Saara?",
        answers: [
            { text: "Ásia", correct: false },
            { text: "América do Sul", correct: false },
            { text: "África", correct: true },
            { text: "Austrália", correct: false }
        ],
        score: 100,
        hints: [
            "É o maior deserto quente do mundo.",
            "O Egito e a Líbia fazem parte dele.",
            "O nome do continente começa com 'A'."
        ]
    },
    {
        category: "Arte e Literatura",
        question: "Quem escreveu 'Cem Anos de Solidão'?",
        answers: [
            { text: "Jorge Luis Borges", correct: false },
            { text: "Julio Cortázar", correct: false },
            { text: "Gabriel García Márquez", correct: true },
            { text: "Mario Vargas Llosa", correct: false }
        ],
        score: 250,
        hints: [
            "O autor era colombiano.",
            "Ele ganhou o Prêmio Nobel de Literatura.",
            "Seu apelido era 'Gabo'."
        ]
    },
    {
        category: "Arte e Literatura",
        question: "Qual artista é famoso por cortar a própria orelha?",
        answers: [
            { text: "Pablo Picasso", correct: false },
            { text: "Salvador Dalí", correct: false },
            { text: "Vincent van Gogh", correct: true },
            { text: "Claude Monet", correct: false }
        ],
        score: 150,
        hints: [
            "Ele era um pintor pós-impressionista holandês.",
            "Pintou 'A Noite Estrelada'.",
            "Seu primeiro nome é Vincent."
        ]
    },
    {
        category: "Conhecimentos Gerais",
        question: "Qual é a moeda oficial do Reino Unido?",
        answers: [
            { text: "Euro", correct: false },
            { text: "Dólar", correct: false },
            { text: "Libra Esterlina", correct: true },
            { text: "Franco", correct: false }
        ],
        score: 150,
        hints: [
            "Não é a mesma moeda da maior parte da Europa.",
            "Seu símbolo é £.",
            "O nome em inglês é 'Pound Sterling'."
        ]
    },
    // --- FUTEBOL ---
    {
        category: "Futebol",
        question: "Qual jogador é conhecido como 'Rei do Futebol'?",
        answers: [
            { text: "Maradona", correct: false },
            { text: "Messi", correct: false },
            { text: "Pelé", correct: true },
            { text: "Cristiano Ronaldo", correct: false }
        ],
        score: 100,
        hints: [
            "Ele é brasileiro.",
            "Ele ganhou 3 Copas do Mundo.",
            "Seu nome verdadeiro é Edson Arantes do Nascimento."
        ]
    },
    {
        category: "Futebol",
        question: "Qual jogador argentino é famoso por ter feito um gol de 'mão de Deus'?",
        answers: [
            { text: "Lionel Messi", correct: false },
            { text: "Diego Maradona", correct: true },
            { text: "Gabriel Batistuta", correct: false },
            { text: "Juan Román Riquelme", correct: false }
        ],
        score: 150,
        hints: [
            "O gol aconteceu na Copa do Mundo de 1986.",
            "Foi contra a seleção da Inglaterra.",
            "Seu nome é Diego."
        ]
    },
    {
        category: "Futebol",
        question: "Qual time inglês é conhecido como 'The Red Devils' (Os Diabos Vermelhos)?",
        answers: [
            { text: "Liverpool", correct: false },
            { text: "Arsenal", correct: false },
            { text: "Manchester City", correct: false },
            { text: "Manchester United", correct: true }
        ],
        score: 200,
        hints: [
            "Seu estádio é o Old Trafford.",
            "Cristiano Ronaldo e Wayne Rooney são ídolos do clube.",
            "O nome do time inclui o nome da cidade."
        ]
    },
    {
        category: "Futebol",
        question: "Quantas vezes a seleção brasileira masculina de futebol ganhou a Copa do Mundo?",
        answers: [
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false },
            { text: "3", correct: false }
        ],
        score: 50,
        hints: [
            "É a seleção com mais títulos.",
            "O último título foi em 2002.",
            "É o mesmo número de estrelas na camisa da seleção."
        ]
    },
    {
        category: "Futebol",
        question: "Quem foi o técnico do Brasil na conquista do pentacampeonato em 2002?",
        answers: [
            { text: "Zagallo", correct: false },
            { text: "Tite", correct: false },
            { text: "Vanderlei Luxemburgo", correct: false },
            { text: "Luiz Felipe Scolari", correct: true }
        ],
        score: 200,
        hints: [
            "Ele é conhecido como Felipão.",
            "Ele também treinou a seleção na Copa de 2014.",
            "É gaúcho e também treinou Portugal."
        ]
    },
    {
        category: "Futebol",
        question: "Qual jogador português tem 5 títulos da Champions League e é ídolo do Real Madrid?",
        answers: [
            { text: "Luís Figo", correct: false },
            { text: "Cristiano Ronaldo", correct: true },
            { text: "Eusébio", correct: false },
            { text: "Deco", correct: false }
        ],
        score: 100,
        hints: [
            "Ele é famoso por sua comemoração 'Siii'.",
            "Ele também jogou no Manchester United e na Juventus.",
            "Seu apelido é CR7."
        ]
    },
    {
        category: "Futebol",
        question: "Qual clube inglês tem o hino 'You'll Never Walk Alone'?",
        answers: [
            { text: "Chelsea", correct: false },
            { text: "Manchester United", correct: false },
            { text: "Liverpool", correct: true },
            { text: "Arsenal", correct: false }
        ],
        score: 250,
        hints: [
            "Seu estádio se chama Anfield.",
            "O time é conhecido como 'The Reds'.",
            "A cidade do time é a mesma dos Beatles."
        ]
    },
    {
        category: "Futebol",
        question: "Qual jogador brasileiro é conhecido como 'Fenômeno'?",
        answers: [
            { text: "Neymar", correct: false },
            { text: "Ronaldinho Gaúcho", correct: false },
            { text: "Ronaldo Nazário", correct: true },
            { text: "Romário", correct: false }
        ],
        score: 100,
        hints: [
            "Ele foi o principal jogador da Copa de 2002.",
            "Ele usou um corte de cabelo famoso (cascão) na final.",
            "Seu primeiro nome é Ronaldo."
        ]
    },
    {
        category: "Futebol",
        question: "Qual jogador detém o recorde de mais Bolas de Ouro da FIFA?",
        answers: [
            { text: "Cristiano Ronaldo", correct: false },
            { text: "Zinedine Zidane", correct: false },
            { text: "Johan Cruyff", correct: false },
            { text: "Lionel Messi", correct: true }
        ],
        score: 150,
        hints: [
            "Ele é argentino.",
            "Passou a maior parte de sua carreira no Barcelona.",
            "Ganhou a Copa do Mundo de 2022."
        ]
    },
    {
        category: "Futebol",
        question: "Em que país será realizada a próxima Copa do Mundo de 2026?",
        answers: [
            { text: "Espanha, Portugal e Marrocos", correct: false },
            { text: "Argentina, Uruguai e Paraguai", correct: false },
            { text: "EUA, México e Canadá", correct: true },
            { text: "Arábia Saudita", correct: false }
        ],
        score: 200,
        hints: [
            "Será a primeira Copa com 48 seleções.",
            "Será sediada por três países.",
            "Todos os países anfitriões ficam na América do Norte."
        ]
    },

    // --- FILMES ---
    {
        category: "Filmes",
        question: "Qual filme de 1997, dirigido por James Cameron, foi o de maior bilheteria por muitos anos?",
        answers: [
            { text: "Jurassic Park", correct: false },
            { text: "Titanic", correct: true },
            { text: "O Exterminador do Futuro 2", correct: false },
            { text: "Avatar", correct: false }
        ],
        score: 150,
        hints: [
            "A história se passa em um navio famoso.",
            "A música tema é 'My Heart Will Go On'.",
            "É estrelado por Leonardo DiCaprio e Kate Winslet."
        ]
    },
    {
        category: "Filmes",
        question: "Qual ator interpretou o Coringa no filme 'O Cavaleiro das Trevas' de 2008?",
        answers: [
            { text: "Jack Nicholson", correct: false },
            { text: "Joaquin Phoenix", correct: false },
            { text: "Heath Ledger", correct: true },
            { text: "Jared Leto", correct: false }
        ],
        score: 200,
        hints: [
            "Sua atuação lhe rendeu um Oscar póstumo.",
            "Ele era australiano.",
            "Sua famosa frase no filme é 'Why so serious?'."
        ]
    },
    {
        category: "Filmes",
        question: "Qual objeto mágico é o centro da trama na trilogia 'O Senhor dos Anéis'?",
        answers: [
            { text: "A Varinha das Varinhas", correct: false },
            { text: "O Um Anel", correct: true },
            { text: "A Pedra Filosofal", correct: false },
            { text: "O Olho de Agamotto", correct: false }
        ],
        score: 100,
        hints: [
            "Foi forjado por Sauron.",
            "Ele deixa seu portador invisível.",
            "A inscrição 'Um Anel para a todos governar...' aparece nele."
        ]
    },
    {
        category: "Filmes",
        question: "Quem dirigiu o clássico filme de suspense 'Psicose' de 1960?",
        answers: [
            { text: "Stanley Kubrick", correct: false },
            { text: "Orson Welles", correct: false },
            { text: "Alfred Hitchcock", correct: true },
            { text: "Martin Scorsese", correct: false }
        ],
        score: 250,
        hints: [
            "Ele era conhecido como o 'Mestre do Suspense'.",
            "Ele fazia aparições rápidas em seus próprios filmes.",
            "A famosa cena do chuveiro é deste filme."
        ]
    },
    {
        category: "Filmes",
        question: "Qual filme da Pixar conta a história dos sentimentos de uma menina chamada Riley?",
        answers: [
            { text: "Up - Altas Aventuras", correct: false },
            { text: "Divertida Mente", correct: true },
            { text: "WALL-E", correct: false },
            { text: "Toy Story", correct: false }
        ],
        score: 100,
        hints: [
            "Os personagens principais são Alegria, Tristeza, Raiva, Medo e Nojinho.",
            "O filme se passa, em grande parte, dentro da cabeça da personagem.",
            "O título em inglês é 'Inside Out'."
        ]
    },
    {
        category: "Filmes",
        question: "Qual ator interpreta o Capitão Jack Sparrow na franquia 'Piratas do Caribe'?",
        answers: [
            { text: "Orlando Bloom", correct: false },
            { text: "Geoffrey Rush", correct: false },
            { text: "Johnny Depp", correct: true },
            { text: "Javier Bardem", correct: false }
        ],
        score: 50,
        hints: [
            "Ele é conhecido por seus papéis excêntricos.",
            "Ele também interpretou Willy Wonka e o Chapeleiro Maluco.",
            "Seu nome é Johnny."
        ]
    },
    {
        category: "Filmes",
        question: "Em 'De Volta para o Futuro', qual é a marca do carro usado como máquina do tempo?",
        answers: [
            { text: "Ferrari", correct: false },
            { text: "Porsche", correct: false },
            { text: "DeLorean", correct: true },
            { text: "Lamborghini", correct: false }
        ],
        score: 150,
        hints: [
            "O carro tem portas que abrem para cima (asas de gaivota).",
            "A marca é de um engenheiro que trabalhou na General Motors.",
            "O nome da marca começa com 'DeL'."
        ]
    },
    {
        category: "Filmes",
        question: "Qual filme de Quentin Tarantino é dividido em capítulos não cronológicos e estrela John Travolta?",
        answers: [
            { text: "Cães de Aluguel", correct: false },
            { text: "Kill Bill", correct: false },
            { text: "Pulp Fiction: Tempo de Violência", correct: true },
            { text: "Bastardos Inglórios", correct: false }
        ],
        score: 250,
        hints: [
            "O pôster do filme mostra Uma Thurman deitada fumando.",
            "A cena da dança entre John Travolta e Uma Thurman é icônica.",
            "O título se refere a revistas baratas de ficção."
        ]
    },
    {
        category: "Filmes",
        question: "Qual o nome do vilão principal na saga 'Harry Potter'?",
        answers: [
            { text: "Draco Malfoy", correct: false },
            { text: "Severus Snape", correct: false },
            { text: "Lord Voldemort", correct: true },
            { text: "Sirius Black", correct: false }
        ],
        score: 50,
        hints: [
            "Ele é conhecido como 'Aquele-Que-Não-Deve-Ser-Nomeado'.",
            "Ele matou os pais de Harry.",
            "Seu nome verdadeiro é Tom Riddle."
        ]
    },
    {
        category: "Filmes",
        question: "Qual filme de ficção científica de 1999 popularizou o efeito 'bullet time'?",
        answers: [
            { text: "O Quinto Elemento", correct: false },
            { text: "Blade Runner", correct: false },
            { text: "Matrix", correct: true },
            { text: "Starship Troopers", correct: false }
        ],
        score: 200,
        hints: [
            "O protagonista, Neo, é interpretado por Keanu Reeves.",
            "O filme questiona a natureza da nossa realidade.",
            "A famosa cena envolve desviar de balas em câmera lenta."
        ]
    },

    // --- SÉRIES ---
    {
        category: "Séries",
        question: "Em 'Game of Thrones', qual é o lema da Casa Stark?",
        answers: [
            { text: "Ouça-me Rugir!", correct: false },
            { text: "O Inverno está Chegando", correct: true },
            { text: "Fogo e Sangue", correct: false },
            { text: "Nós não Semeamos", correct: false }
        ],
        score: 150,
        hints: [
            "É uma frase de advertência.",
            "A família vive no Norte de Westeros.",
            "A frase se refere a uma longa estação do ano."
        ]
    },
    {
        category: "Séries",
        question: "Qual é a profissão de Sheldon Cooper na série 'The Big Bang Theory'?",
        answers: [
            { text: "Engenheiro Aeroespacial", correct: false },
            { text: "Astrofísico", correct: false },
            { text: "Físico Teórico", correct: true },
            { text: "Neurocientista", correct: false }
        ],
        score: 200,
        hints: [
            "Ele estuda conceitos como a Teoria das Cordas.",
            "É um campo da física que usa modelos matemáticos.",
            "Não é uma ciência experimental."
        ]
    },
    {
        category: "Séries",
        question: "Qual série de comédia se passa em um escritório de uma empresa de papel chamada Dunder Mifflin?",
        answers: [
            { text: "Parks and Recreation", correct: false },
            { text: "Brooklyn Nine-Nine", correct: false },
            { text: "The Office", correct: true },
            { text: "Community", correct: false }
        ],
        score: 100,
        hints: [
            "O gerente se chama Michael Scott.",
            "A série é filmada no estilo de um documentário.",
            "O nome da série significa 'O Escritório'."
        ]
    },
    {
        category: "Séries",
        question: "Em 'Friends', qual é o nome do café onde os personagens se encontram?",
        answers: [
            { text: "Monk's Café", correct: false },
            { text: "Central Perk", correct: true },
            { text: "MacLaren's Pub", correct: false },
            { text: "Luke's Diner", correct: false }
        ],
        score: 50,
        hints: [
            "O nome é um trocadilho com um famoso parque de Nova York.",
            "O sofá laranja é o ponto principal do local.",
            "O gerente se chama Gunther."
        ]
    },
    {
        category: "Séries",
        question: "Qual é o nome do monstro do Mundo Invertido na primeira temporada de 'Stranger Things'?",
        answers: [
            { text: "Devorador de Mentes", correct: false },
            { text: "Vecna", correct: false },
            { text: "Demogorgon", correct: true },
            { text: "D'Artagnan", correct: false }
        ],
        score: 150,
        hints: [
            "O nome foi tirado de um jogo de RPG.",
            "Ele não tem rosto, sua cabeça se abre como uma flor.",
            "É o monstro que leva Will Byers."
        ]
    },
    {
        category: "Séries",
        question: "Qual série conta a história de um grupo de ladrões que assaltam a Casa da Moeda da Espanha?",
        answers: [
            { text: "Vis a Vis", correct: false },
            { text: "Elite", correct: false },
            { text: "La Casa de Papel", correct: true },
            { text: "Lupin", correct: false }
        ],
        score: 100,
        hints: [
            "Os personagens usam nomes de cidades.",
            "O líder do grupo é chamado de 'Professor'.",
            "O macacão vermelho e a máscara de Dalí são seus símbolos."
        ]
    },
    {
        category: "Séries",
        question: "Em 'The Crown', qual rainha a série retrata?",
        answers: [
            { text: "Rainha Vitória", correct: false },
            { text: "Rainha Elizabeth II", correct: true },
            { text: "Rainha Mary", correct: false },
            { text: "Rainha Anne", correct: false }
        ],
        score: 150,
        hints: [
            "Ela teve o reinado mais longo da história do Reino Unido.",
            "A série começa com seu casamento com Philip.",
            "Ela faleceu em 2022."
        ]
    },
    {
        category: "Séries",
        question: "Qual série médica se passa no hospital Seattle Grace?",
        answers: [
            { text: "House", correct: false },
            { text: "The Good Doctor", correct: false },
            { text: "Grey's Anatomy", correct: true },
            { text: "ER (Plantão Médico)", correct: false }
        ],
        score: 100,
        hints: [
            "A protagonista se chama Meredith Grey.",
            "A série é famosa por seus dramas românticos e tragédias.",
            "O nome da série é um trocadilho com um famoso livro de anatomia."
        ]
    },
    {
        category: "Séries",
        question: "Em 'Peaky Blinders', qual é o nome da família de gângsteres protagonista?",
        answers: [
            { text: "Corleone", correct: false },
            { text: "Soprano", correct: false },
            { text: "Shelby", correct: true },
            { text: "Lannister", correct: false }
        ],
        score: 200,
        hints: [
            "O líder da família se chama Thomas.",
            "Eles são de Birmingham, Inglaterra.",
            "O nome da gangue vem das navalhas que escondiam em suas boinas."
        ]
    },
    {
        category: "Séries",
        question: "Qual o nome do anti-herói protagonista da série 'Dexter'?",
        answers: [
            { text: "Walter White", correct: false },
            { text: "Tony Soprano", correct: false },
            { text: "Dexter Morgan", correct: true },
            { text: "Don Draper", correct: false }
        ],
        score: 150,
        hints: [
            "De dia, ele é um analista forense de padrões de sangue.",
            "À noite, ele caça e mata outros assassinos.",
            "Seu nome está no título da série."
        ]
    },

    // --- DESENHOS ---
    {
        category: "Desenhos",
        question: "Qual é o nome do melhor amigo de Bob Esponja?",
        answers: [
            { text: "Lula Molusco", correct: false },
            { text: "Patrick Estrela", correct: true },
            { text: "Seu Sirigueijo", correct: false },
            { text: "Sandy Bochechas", correct: false }
        ],
        score: 50,
        hints: [
            "Ele é uma estrela-do-mar rosa.",
            "Ele mora debaixo de uma pedra.",
            "Ele não é muito inteligente."
        ]
    },
    {
        category: "Desenhos",
        question: "Em 'Os Simpsons', qual é o nome do dono da Usina Nuclear de Springfield?",
        answers: [
            { text: "Waylon Smithers", correct: false },
            { text: "Ned Flanders", correct: false },
            { text: "Sr. Burns", correct: true },
            { text: "Moe Szyslak", correct: false }
        ],
        score: 100,
        hints: [
            "Ele é muito velho e rico.",
            "Sua frase mais famosa é 'Excelente'.",
            "Seu assistente pessoal é o Smithers."
        ]
    },
    {
        category: "Desenhos",
        question: "Qual é o nome do personagem principal de 'Dragon Ball Z'?",
        answers: [
            { text: "Vegeta", correct: false },
            { text: "Gohan", correct: false },
            { text: "Goku", correct: true },
            { text: "Piccolo", correct: false }
        ],
        score: 50,
        hints: [
            "Ele é um Saiyajin.",
            "Sua principal técnica é o 'Kamehameha'.",
            "Ele é o pai de Gohan e Goten."
        ]
    },
    {
        category: "Desenhos",
        question: "Em 'Tom e Jerry', qual personagem é o gato?",
        answers: [
            { text: "Jerry", correct: false },
            { text: "Spike", correct: false },
            { text: "Tom", correct: true },
            { text: "Butch", correct: false }
        ],
        score: 50,
        hints: [
            "Ele sempre tenta capturar o rato.",
            "Ele é cinza e branco.",
            "Seu nome tem apenas 3 letras."
        ]
    },
    {
        category: "Desenhos",
        question: "Qual o nome do garoto que tem um laboratório secreto em seu quarto?",
        answers: [
            { text: "Johnny Bravo", correct: false },
            { text: "Jimmy Neutron", correct: false },
            { text: "Dexter", correct: true },
            { text: "Phineas", correct: false }
        ],
        score: 150,
        hints: [
            "Sua irmã mais velha, Dee Dee, sempre invade seu laboratório.",
            "Ele tem um sotaque estranho.",
            "O nome do desenho é 'O Laboratório de...'."
        ]
    },
    {
        category: "Desenhos",
        question: "Qual é o nome do cão medroso amigo de Salsicha?",
        answers: [
            { text: "Coragem, o Cão Covarde", correct: false },
            { text: "Pluto", correct: false },
            { text: "Scooby-Doo", correct: true },
            { text: "Snoopy", correct: false }
        ],
        score: 50,
        hints: [
            "Ele resolve mistérios com seus amigos.",
            "Ele adora 'Biscoitos Scooby'.",
            "Sua frase é 'Scooby-Dooby-Doo!'."
        ]
    },
    {
        category: "Desenhos",
        question: "Qual o nome da cidade onde vivem os Flintstones?",
        answers: [
            { text: "Springfield", correct: false },
            { text: "Metropolis", correct: false },
            { text: "Bedrock", correct: true },
            { text: "Gotham", correct: false }
        ],
        score: 150,
        hints: [
            "É uma cidade da Idade da Pedra.",
            "O nome se refere a uma base de rocha.",
            "Começa com a letra 'B'."
        ]
    },
    {
        category: "Desenhos",
        question: "Qual o nome do protagonista de 'Avatar: A Lenda de Aang'?",
        answers: [
            { text: "Zuko", correct: false },
            { text: "Sokka", correct: false },
            { text: "Aang", correct: true },
            { text: "Korra", correct: false }
        ],
        score: 100,
        hints: [
            "Ele é um dobrador de ar.",
            "Ele é o último de sua nação.",
            "Seu nome está no título do desenho."
        ]
    },
    {
        category: "Desenhos",
        question: "Qual o nome do vilão que sempre tenta roubar a fórmula do Hambúrguer de Siri?",
        answers: [
            { text: "Homem-Sereia", correct: false },
            { text: "Lula Molusco", correct: false },
            { text: "Plankton", correct: true },
            { text: "Holandês Voador", correct: false }
        ],
        score: 100,
        hints: [
            "Ele é muito pequeno.",
            "Ele é o dono do restaurante 'Balde de Lixo'.",
            "Ele é um organismo unicelular."
        ]
    },
    {
        category: "Desenhos",
        question: "Em 'Hora de Aventura', quais são os nomes dos dois personagens principais?",
        answers: [
            { text: "Mordecai e Rigby", correct: false },
            { text: "Gumball e Darwin", correct: false },
            { text: "Finn e Jake", correct: true },
            { text: "Dipper e Mabel", correct: false }
        ],
        score: 100,
        hints: [
            "Um é um garoto humano.",
            "O outro é um cão mágico que pode esticar seu corpo.",
            "Eles vivem na Terra de Ooo."
        ]
    },
    {
        category: "Tecnologia",
        question: "Qual empresa criou o sistema operacional Android?",
        answers: [
            { text: "Apple", correct: false },
            { text: "Google", correct: true },
            { text: "Microsoft", correct: false },
            { text: "Samsung", correct: false }
        ],
        score: 100,
        hints: [
            "É uma gigante das buscas na internet.",
            "Seu logo é colorido.",
            "Ela também é dona do YouTube."
        ]
    },
    {
        category: "Cultura Pop",
        question: "Qual é o nome do martelo do Thor nos filmes da Marvel?",
        answers: [
            { text: "Stormbreaker", correct: false },
            { text: "Mjolnir", correct: true },
            { text: "Excalibur", correct: false },
            { text: "Gungnir", correct: false }
        ],
        score: 150,
        hints: [
            "O nome é de origem nórdica.",
            "Só quem é digno pode levantá-lo.",
            "Começa com a letra M."
        ]
    },
    {
        category: "Literatura",
        question: "Quem escreveu 'O Pequeno Príncipe'?",
        answers: [
            { text: "J.K. Rowling", correct: false },
            { text: "Antoine de Saint-Exupéry", correct: true },
            { text: "Machado de Assis", correct: false },
            { text: "Monteiro Lobato", correct: false }
        ],
        score: 200,
        hints: [
            "O autor era francês.",
            "Ele também era aviador.",
            "Seu sobrenome começa com S."
        ]
    },
    {
        category: "Geografia",
        question: "Qual é o menor país do mundo?",
        answers: [
            { text: "Mônaco", correct: false },
            { text: "Vaticano", correct: true },
            { text: "San Marino", correct: false },
            { text: "Liechtenstein", correct: false }
        ],
        score: 100,
        hints: [
            "Fica dentro de Roma.",
            "É a sede da Igreja Católica.",
            "O Papa mora lá."
        ]
    },
    {
        category: "Matemática",
        question: "Qual é o valor de pi (π) arredondado para duas casas decimais?",
        answers: [
            { text: "3,14", correct: true },
            { text: "2,71", correct: false },
            { text: "1,62", correct: false },
            { text: "3,33", correct: false }
        ],
        score: 50,
        hints: [
            "É um número irracional.",
            "Começa com 3.",
            "É usado para calcular a circunferência."
        ]
    },
    {
        category: "Música",
        question: "Quem é conhecida como a 'Rainha do Pop'?",
        answers: [
            { text: "Beyoncé", correct: false },
            { text: "Madonna", correct: true },
            { text: "Lady Gaga", correct: false },
            { text: "Rihanna", correct: false }
        ],
        score: 100,
        hints: [
            "Ela ficou famosa nos anos 80.",
            "Seu nome artístico é Madonna.",
            "Hits como 'Like a Virgin'."
        ]
    },
    {
        category: "Atualidades",
        question: "Qual país sediou as Olimpíadas de 2021?",
        answers: [
            { text: "China", correct: false },
            { text: "Japão", correct: true },
            { text: "Brasil", correct: false },
            { text: "França", correct: false }
        ],
        score: 150,
        hints: [
            "A cidade-sede foi Tóquio.",
            "O evento foi adiado por causa da pandemia.",
            "O país é conhecido por animes."
        ]
    },
    {
        category: "Natureza",
        question: "Qual é o maior animal terrestre do mundo?",
        answers: [
            { text: "Elefante Africano", correct: true },
            { text: "Girafa", correct: false },
            { text: "Hipopótamo", correct: false },
            { text: "Rinoceronte", correct: false }
        ],
        score: 100,
        hints: [
            "Tem grandes presas de marfim.",
            "É encontrado na savana africana.",
            "É o maior mamífero terrestre."
        ]
    },
    {
        category: "Línguas",
        question: "Qual é o idioma mais falado no mundo?",
        answers: [
            { text: "Inglês", correct: false },
            { text: "Mandarim", correct: true },
            { text: "Espanhol", correct: false },
            { text: "Hindi", correct: false }
        ],
        score: 150,
        hints: [
            "É falado principalmente na China.",
            "Tem mais de 1 bilhão de falantes.",
            "É um dos idiomas oficiais da ONU."
        ]
    },
    {
        category: "Invenções",
        question: "Quem inventou a lâmpada elétrica?",
        answers: [
            { text: "Nikola Tesla", correct: false },
            { text: "Thomas Edison", correct: true },
            { text: "Alexander Graham Bell", correct: false },
            { text: "Galileu Galilei", correct: false }
        ],
        score: 200,
        hints: [
            "Era um inventor americano.",
            "Também inventou o fonógrafo.",
            "Seu sobrenome é Edison."
        ]
    }
];

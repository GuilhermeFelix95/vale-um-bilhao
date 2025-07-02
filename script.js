/*
  Script principal (script.js)
  Aqui está toda a lógica que faz nosso jogo de Quiz funcionar,
  incluindo o sistema de vidas e as ajudas especiais.
*/

// --- CAPTURANDO ELEMENTOS DA PÁGINA ---
const startScreen = document.getElementById('start-screen');
const gameContainer = document.getElementById('game-container');
const endScreen = document.getElementById('end-screen');
const helpModal = document.getElementById('help-modal');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const modalCloseBtn = document.getElementById('modal-close-btn');

const questionCounterEl = document.getElementById('question-counter');
const scoreEl = document.getElementById('score');
const errorTrackerEl = document.getElementById('error-tracker');
const questionCategoryEl = document.getElementById('question-category');
const questionTextEl = document.getElementById('question-text');
const answerOptionsEl = document.getElementById('answer-options');

const endTitleEl = document.getElementById('end-title');
const endMessageEl = document.getElementById('end-message');
const finalScoreEl = document.getElementById('final-score');
const victoryAnimationEl = document.getElementById('victory-animation');

const modalTitleEl = document.getElementById('modal-title');
const modalBodyEl = document.getElementById('modal-body');

const helpUniversitariosBtn = document.getElementById('help-universitarios');
const helpCartasBtn = document.getElementById('help-cartas');
const helpProfessorBtn = document.getElementById('help-professor');

const playerNameInput = document.getElementById('player-name');

// --- VARIÁVEIS DE ESTADO DO JOGO ---
let shuffledQuestions, currentQuestionIndex;
let score = 0;
let wrongAnswers = 0;
let usedHelps = {};
const TOTAL_QUESTIONS = 20;
const MAX_WRONG_ANSWERS = 3;
let playerName = '';

// --- EVENT LISTENERS ---
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);
modalCloseBtn.addEventListener('click', () => helpModal.classList.add('hidden'));

helpUniversitariosBtn.addEventListener('click', useUniversitariosHelp);
helpCartasBtn.addEventListener('click', useCartasHelp);
helpProfessorBtn.addEventListener('click', useProfessorHelp);

// --- FUNÇÕES DO JOGO ---

/**
 * Embaralha um array usando o algoritmo Fisher-Yates.
 * @param {Array} array - O array a ser embaralhado.
 */
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // Enquanto ainda houver elementos para embaralhar.
    while (currentIndex !== 0) {
        // Pega um elemento restante.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // E troca com o elemento atual.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

/**
 * Inicia ou reinicia o jogo, resetando as variáveis e preparando a tela.
 */
function startGame() {
    // Salva o nome do jogador
    playerName = playerNameInput ? playerNameInput.value.trim() : '';
    if (!playerName) playerName = 'Jogador';
    // Esconde as telas de início/fim e mostra a tela do jogo.
    startScreen.classList.add('hidden');
    endScreen.classList.add('hidden');
    gameContainer.classList.remove('hidden');

    // Reseta as variáveis do jogo.
    score = 0;
    scoreEl.innerText = score;
    wrongAnswers = 0;
    updateErrorTracker();
    
    usedHelps = { universitarios: false, cartas: false, professor: false };
    updateHelpButtons();

    // CORREÇÃO: Cria uma cópia do array de perguntas e usa um algoritmo de shuffle mais robusto.
    let tempQuestions = [...questions];
    shuffle(tempQuestions);
    shuffledQuestions = tempQuestions.slice(0, TOTAL_QUESTIONS);
    
    currentQuestionIndex = 0;

    // Prepara e exibe a primeira pergunta.
    setNextQuestion();
}

/**
 * Prepara e exibe a próxima pergunta na tela.
 */
function setNextQuestion() {
    resetState(); // Limpa o estado da pergunta anterior.
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

/**
 * Exibe a pergunta e suas opções na tela.
 * @param {object} question - O objeto da pergunta atual.
 */
function showQuestion(question) {
    // Atualiza os contadores, categoria e texto da pergunta.
    questionCounterEl.innerText = currentQuestionIndex + 1;
    questionCategoryEl.innerText = question.category;
    questionTextEl.innerText = question.question;

    // Cria um botão para cada opção de resposta.
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');

        // Se a resposta for a correta, armazena essa informação no botão.
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        // Adiciona o evento de clique para o botão.
        button.addEventListener('click', selectAnswer);
        answerOptionsEl.appendChild(button);
    });
}

/**
 * Limpa a área de respostas e remove os status de certo/errado.
 */
function resetState() {
    while (answerOptionsEl.firstChild) {
        answerOptionsEl.removeChild(answerOptionsEl.firstChild);
    }
}

/**
 * Chamada quando o usuário clica em uma opção de resposta.
 * @param {Event} e - O evento de clique.
 */
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';

    // Aplica a classe de 'certo' ou 'errado' ao botão clicado.
    setStatusClass(selectedButton, correct);

    if (correct) {
        score += shuffledQuestions[currentQuestionIndex].score;
        scoreEl.innerText = score;
    } else {
        wrongAnswers++;
        updateErrorTracker();
    }

    // Desabilita todos os botões e mostra qual era a resposta correta.
    Array.from(answerOptionsEl.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            setStatusClass(button, true);
        }
        button.disabled = true;
    });

    // Verifica se o jogo deve continuar ou terminar.
    setTimeout(() => {
        if (wrongAnswers >= MAX_WRONG_ANSWERS) {
            endGame(true); // Termina o jogo por excesso de erros
        } else if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
            currentQuestionIndex++;
            setNextQuestion();
        } else {
            endGame(false); // Termina o jogo por completar as perguntas
        }
    }, 1500); // Espera 1.5 segundos antes de ir para a próxima pergunta.
}

/**
 * Aplica a classe CSS apropriada (certo/errado) a um elemento.
 * @param {HTMLElement} element - O botão de resposta.
 * @param {boolean} correct - Se a resposta é correta.
 */
function setStatusClass(element, correct) {
    element.classList.add(correct ? 'correct' : 'wrong');
}

function updateErrorTracker() {
    const errorIcons = errorTrackerEl.querySelectorAll('.error-icon');
    errorIcons.forEach((icon, index) => {
        if (index < wrongAnswers) {
            icon.classList.remove('hidden');
        } else {
            icon.classList.add('hidden');
        }
    });
}

/**
 * Finaliza o jogo e exibe a tela final.
 * @param {boolean} lostByErrors - Indica se o jogo terminou por excesso de erros.
 */
function endGame(lostByErrors) {
    gameContainer.classList.add('hidden');
    endScreen.classList.remove('hidden');
    finalScoreEl.innerText = score;

    if (lostByErrors) {
        endTitleEl.innerText = "Fim de Jogo!";
        endMessageEl.innerText = `Valeu, ${playerName}! Tente novamente! Você errou 3 vezes. Sua pontuação final foi:`;
        victoryAnimationEl.style.display = 'none';
        return;
    }

    const totalPossibleScore = shuffledQuestions.reduce((sum, q) => sum + q.score, 0);
    if (score >= totalPossibleScore / 2 && score > 0) {
        endTitleEl.innerText = "Parabéns!";
        endMessageEl.innerText = `Parabéns, ${playerName}! Você ganhou um bilhão em criptomoedas da VUB, você é o melhor! Sua pontuação final foi:`;
        showVictoryAnimation();
    } else {
        endTitleEl.innerText = "Você Concluiu!";
        endMessageEl.innerText = `Não foi dessa vez, ${playerName}, mas você chegou ao fim! Sua pontuação final foi:`;
        victoryAnimationEl.style.display = 'none';
    }
}

function showVictoryAnimation() {
    victoryAnimationEl.style.display = 'block';
    const spans = victoryAnimationEl.querySelectorAll('span');
    spans.forEach((span, index) => {
        span.style.animationDelay = `${index * 0.1}s`;
    });
}

// --- LÓGICA DAS AJUDAS ---

function updateHelpButtons() {
    helpUniversitariosBtn.disabled = usedHelps.universitarios;
    helpCartasBtn.disabled = usedHelps.cartas;
    helpProfessorBtn.disabled = usedHelps.professor;
}

function useUniversitariosHelp() {
    if (usedHelps.universitarios) return;
    usedHelps.universitarios = true;
    updateHelpButtons();

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const correctAnswerText = currentQuestion.answers.find(a => a.correct).text;
    const wrongAnswersText = currentQuestion.answers.filter(a => !a.correct).map(a => a.text);

    let opinionsHTML = '<div class="university-opinions">';
    for (let i = 1; i <= 5; i++) {
        const isCorrect = Math.random() < 0.6; // 60% de chance de acertar
        const opinion = isCorrect ? correctAnswerText : wrongAnswersText[Math.floor(Math.random() * wrongAnswersText.length)];
        opinionsHTML += `<p><strong>Universitário ${i}:</strong> "Acho que a resposta é ${opinion}"</p>`;
    }
    opinionsHTML += '</div>';

    modalTitleEl.innerText = "Opinião dos Universitários";
    modalBodyEl.innerHTML = opinionsHTML;
    helpModal.classList.remove('hidden');
}

function useCartasHelp() {
    if (usedHelps.cartas) return;
    usedHelps.cartas = true;
    updateHelpButtons();

    const hints = [...shuffledQuestions[currentQuestionIndex].hints].sort(() => Math.random() - 0.5);
    
    modalTitleEl.innerText = "Escolha uma Carta";
    modalBodyEl.innerHTML = `
        <div class="card-container">
            <div class="card">
                <div class="card-face card-front">?</div>
                <div class="card-face card-back">${hints[0]}</div>
            </div>
            <div class="card">
                <div class="card-face card-front">?</div>
                <div class="card-face card-back">${hints[1]}</div>
            </div>
            <div class="card">
                <div class="card-face card-front">?</div>
                <div class="card-face card-back">${hints[2]}</div>
            </div>
        </div>
    `;
    helpModal.classList.remove('hidden');

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('flipped');
            // Desabilita as outras cartas
            document.querySelectorAll('.card:not(.flipped)').forEach(c => c.style.pointerEvents = 'none');
        }, { once: true });
    });
}

function useProfessorHelp() {
    if (usedHelps.professor) return;
    usedHelps.professor = true;
    updateHelpButtons();

    Array.from(answerOptionsEl.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('professor-pick');
        }
    });
}
